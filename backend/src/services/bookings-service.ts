import { prisma } from "../config/prisma.config.js";
import type {
    CreateBookingBody,
    UpdateBookingBody,
} from "../types/bookings.js";
import { BadRequestError } from "../utils/http-error.js";
import { BookingStatus, type tblBookings } from "../../generated/prisma/client.js";
import type { tblBookingsFindManyArgs } from "../../generated/prisma/models.js";

const BookingsService = {
    db: {
        GetAllBookings,
        GetBookingsByUserId,
        GetBookingById,
        GetBookingsByFilter,
        CreateBooking,
        UpdateBookingStatus,
        UpdateBooking,
    },
    typeCheck: { CheckCreateBookingBody, CheckUpdateBookingBody },
};

function CheckCreateBookingBody(body: any): CreateBookingBody {
    if (!body.roomId)
        throw new BadRequestError("Missing required field roomId");
    if (!body.startTime)
        throw new BadRequestError("Missing required field startTime");
    if (!body.endTime)
        throw new BadRequestError("Missing required field endTime");
    if (!body.description)
        throw new BadRequestError("Missing required field description");
    if (!body.attendeeCount)
        throw new BadRequestError("Missing required field attendeeCount");
    if (Number.isNaN(Number(body.attendeeCount)))
        throw new BadRequestError("attendeeCount should be number");
    if (body.startTime == body.endTime)
        throw new BadRequestError(
            "meeting start time and end time should not be the same",
        );
    return body as CreateBookingBody;
}
function CheckUpdateBookingBody(body: any): UpdateBookingBody {
    if (!body.bookingId) {
        throw new BadRequestError("Missing required field bookingId");
    }

    // Basic type checks for optional fields
    if (body.attendeeCount && Number.isNaN(Number(body.attendeeCount))) {
        throw new BadRequestError("attendeeCount should be a number");
    }

    if (body.startTime && body.endTime) {
        if (
            new Date(body.startTime).getTime() ===
            new Date(body.endTime).getTime()
        ) {
            throw new BadRequestError(
                "Start and end time should not be the same",
            );
        }
    }

    return body as UpdateBookingBody;
}
//DB Service
async function GetAllBookings() {
    const bookings = await prisma.tblBookings.findMany({
        select: {
            attendeeCount: true,
            id: true,
            bookingStatus: true,
            description: true,
            createdAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                },
            },
            room: true,
            startTime: true,
            endTime: true,
        },
    });
    return bookings.sort((a, b) => b.id - a.id);
}

async function GetBookingsByFilter(
    filter: tblBookingsFindManyArgs,
): Promise<tblBookings[] | undefined> {
    const bookings = await prisma.tblBookings.findMany(filter);
    return bookings;
}

async function GetBookingById(bookingId: number): Promise<tblBookings | null> {
    return prisma.tblBookings.findFirst({ where: { id: bookingId } });
}

async function GetBookingsByUserId(
    userId: number,
): Promise<tblBookings[] | undefined> {
    const bookings = await prisma.tblBookings.findMany({ where: { userId } });
    return bookings;
}

async function CreateBooking(bookingInfo: Omit<tblBookings, "id">) {
    if (bookingInfo.startTime > bookingInfo.endTime) {
        throw new BadRequestError(
            "Start time should not be greater the end time",
        );
    }
    //add 10 mins as buffer
    const bufferStart = new Date(bookingInfo.startTime.getTime() - 10 * 60000);
    const bufferEnd = new Date(bookingInfo.endTime.getTime() + 10 * 60000);
    //Check if the bookings times are over lapping
    const bookingsCheck = await prisma.tblBookings.findMany({
        where: {
            AND: [
                { roomId: bookingInfo.roomId },
                { startTime: { lt: bufferEnd } },
                { endTime: { gt: bufferStart } },
                {
                    NOT: { bookingStatus: BookingStatus.CANCELLED },
                },
            ],
        },
    });
    if (bookingsCheck.length > 0) {
        throw new BadRequestError(
            "Time slot overlaps with an existing booking",
        );
    }
    const room = await prisma.tblRooms.findFirst({
        where: { id: bookingInfo.roomId },
    });
    if (!room) {
        throw new BadRequestError("Room does not exist");
    }
    const booking = await prisma.tblBookings.create({
        data: {
            ...bookingInfo,
            bookingStatus: BookingStatus.CONFIRMED,
        },
    });
    return booking;
}

async function UpdateBookingStatus(bookingId: number, status: BookingStatus) {
    const booking = await prisma.tblBookings.update({
        where: {
            id: bookingId,
        },
        data: {
            bookingStatus: status,
        },
    });
    return booking;
}

export async function UpdateBooking(
    bookingId: number,
    updateData: UpdateBookingBody,
) {
    // fetch current booking data to handle partial updates
    const currentBooking = await prisma.tblBookings.findUnique({
        where: { id: bookingId },
    });

    if (!currentBooking) {
        throw new BadRequestError("Booking not found");
    }

    // merge existing data with update data
    const roomId = updateData.roomId ?? currentBooking.roomId;
    const startTime = updateData.startTime ?? currentBooking.startTime;
    const endTime = updateData.endTime ?? currentBooking.endTime;

    // logic Validation
    if (startTime > endTime) {
        throw new BadRequestError(
            "Start time should not be greater than end time",
        );
    }

    // overlap Check (with 10-min buffer)
    const bufferStart = new Date(startTime.getTime() - 10 * 60000);
    const bufferEnd = new Date(endTime.getTime() + 10 * 60000);

    const bookingsCheck = await prisma.tblBookings.findMany({
        where: {
            AND: [
                { roomId: roomId },
                { startTime: { lt: bufferEnd } },
                { endTime: { gt: bufferStart } },
                { NOT: { bookingStatus: BookingStatus.CANCELLED } },
                // ignore the current booking being updated
                { NOT: { id: bookingId } },
            ],
        },
    });

    if (bookingsCheck.length > 0) {
        throw new BadRequestError(
            "New time slot overlaps with an existing booking",
        );
    }

    // room Existence Check (only if roomId is being changed)
    if (updateData.roomId) {
        const room = await prisma.tblRooms.findUnique({
            where: { id: updateData.roomId },
        });
        if (!room) throw new BadRequestError("Room does not exist");
    }

    // execute Update
    const updatedBooking = await prisma.tblBookings.update({
        where: { id: bookingId },
        data: {
            ...(updateData.description && {
                description: updateData.description,
            }),
            ...(updateData.attendeeCount && {
                attendeeCount: updateData.attendeeCount,
            }),
            roomId,
            startTime,
            endTime,
        },
    });

    return updatedBooking;
}

export default BookingsService;
