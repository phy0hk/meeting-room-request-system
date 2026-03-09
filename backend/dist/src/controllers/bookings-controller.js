import BookingsService from "../services/bookings-service.js";
import { BadRequestError, ForbiddenError, InternalServerError, UnauthorizedError, } from "../utils/http-error.js";
import { BookingStatus, Role, } from "../../generated/prisma/client.js";
export const GetBookings = async (req, res, next) => {
    const bookings = await BookingsService.db.GetAllBookings();
    res.send({ status: "success", data: bookings });
};
export async function CreateBooking(req, res, next) {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const body = req.body;
    const createBookingBody = BookingsService.typeCheck.CheckCreateBookingBody(body);
    const user = req.user;
    if (!user)
        throw new InternalServerError("Missing user info in request");
    const booking = {
        roomId: createBookingBody.roomId,
        attendeeCount: createBookingBody.attendeeCount,
        userId: user.id,
        createdAt: new Date(),
        description: createBookingBody.description,
        startTime: new Date(createBookingBody.startTime),
        endTime: new Date(createBookingBody.endTime),
        bookingStatus: BookingStatus.CONFIRMED,
    };
    const createdBooking = await BookingsService.db.CreateBooking(booking);
    if (!createdBooking)
        throw new InternalServerError("Failed to create booking");
    res.status(201).json({ status: "success", data: createdBooking });
}
export async function CancelBooking(req, res) {
    const { bookingId } = req.query;
    if (!bookingId)
        throw new BadRequestError("Missing booking id");
    if (Number.isNaN(Number(bookingId)))
        throw new BadRequestError("Booking id should be number");
    const booking = await BookingsService.db.GetBookingById(Number(bookingId));
    if (!booking)
        throw new BadRequestError("Booking does not exist");
    if (booking.bookingStatus === BookingStatus.CANCELLED)
        throw new BadRequestError("This booking is already cancelled");
    const user = req.user;
    if (!user)
        throw new UnauthorizedError("Missing user info in request");
    if (booking?.userId === user.id ||
        user.role == Role.ADMIN ||
        user.role == Role.OWNER) {
        const updatedBooking = await BookingsService.db.UpdateBookingStatus(Number(bookingId), BookingStatus.CANCELLED);
        res.json({ status: "success", data: updatedBooking });
    }
    else {
        throw new ForbiddenError("You are not allowed to cancel other user booking");
    }
}
export async function UpdateBooking(req, res, next) {
    try {
        if (!req.body)
            throw new BadRequestError("Missing required body");
        // validate the incoming body
        const updateData = BookingsService.typeCheck.CheckUpdateBookingBody(req.body);
        //convert date strings to Date objects (if they exist)
        const formattedData = {
            ...updateData,
            startTime: updateData.startTime
                ? new Date(updateData.startTime)
                : undefined,
            endTime: updateData.endTime
                ? new Date(updateData.endTime)
                : undefined,
        };
        //call the service logic (the function we wrote in the previous step)
        const updatedBooking = await BookingsService.db.UpdateBooking(updateData.bookingId, formattedData);
        if (!updatedBooking) {
            throw new InternalServerError("Failed to update booking");
        }
        //return success
        res.status(200).json({
            status: "success",
            data: updatedBooking,
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=bookings-controller.js.map