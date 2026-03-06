import { prisma } from "@/config/prisma.config.js";
import type { CreateBookingBody, UpdateBookingBody } from "@/types/bookings.js";
import { BadRequestError } from "@/utils/http-error.js";
import { BookingStatus, type tblBookings } from "generated/prisma/client.js";
import type { tblBookingsFindManyArgs } from "generated/prisma/models.js";

const BookingsService = {
    db: {
        GetAllBookings,
        GetBookingsByUserId,
        GetBookingById,
        GetBookingsByFilter,
        CreateBooking,
        UpdateBookingStatus,
    },
    typeCheck: { CheckCreateBookingBody },
};

function CheckCreateBookingBody(body: any): CreateBookingBody {
    if (!body.roomId)
        throw new BadRequestError("Missing required field roomId");
    if (!body.startTime)
        throw new BadRequestError("Missing required field startTime");
    if (!body.endTime)
        throw new BadRequestError("Missing required field endTime");
    if (!body.attendeeCount)
        throw new BadRequestError("Missing required field attendeeCount");
    if (Number.isNaN(Number(body.attendeeCount)))
        throw new BadRequestError("attendeeCount should be number");
    return body as CreateBookingBody;
}

//DB Service

async function GetAllBookings(): Promise<tblBookings[] | undefined> {
    const bookings = await prisma.tblBookings.findMany();
    return bookings;
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
        throw new BadRequestError("Bookings are overlapping");
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

async function UpdateBooking(bookingId: number, updateData: UpdateBookingBody) {
    
}

export default BookingsService;
