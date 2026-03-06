import BookingsService from "@/services/bookings-service.js";
import type { AuthenticatedRequest } from "@/types/auth.js";
import type { CreateBookingBody } from "@/types/bookings.js";
import {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    UnauthorizedError,
} from "@/utils/http-error.js";

import type { NextFunction, Request, Response } from "express";
import {
    BookingStatus,
    Role,
    type tblBookings,
} from "generated/prisma/browser.js";

export const GetBookings = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const query = req.query;
    if (!query) {
        const bookings = await BookingsService.db.GetAllBookings();
        res.send({ status: "success", data: bookings });
    } else {
        const bookings = await BookingsService.db.GetBookingsByFilter(query);
        res.send({ status: "success", data: bookings });
    }
};

export async function CreateBooking(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const body = req.body;
    const createBookingBody: CreateBookingBody | null =
        BookingsService.typeCheck.CheckCreateBookingBody(body);
    const user = req.user;
    if (!user) throw new InternalServerError("Missing user info in request");
    const booking: Omit<tblBookings, "id"> = {
        roomId: createBookingBody.roomId,
        attendeeCount: createBookingBody.attendeeCount,
        userId: user.id,
        createdAt: new Date(),
        startTime: new Date(createBookingBody.startTime),
        endTime: new Date(createBookingBody.endTime),
        bookingStatus: BookingStatus.CONFIRMED,
    };
    const createdBooking = await BookingsService.db.CreateBooking(booking);
    if (!createdBooking)
        throw new InternalServerError("Failed to create booking");
    res.status(201).json({ status: "success", data: createdBooking });
}

export async function CancelBooking(req: AuthenticatedRequest, res: Response) {
    const { bookingId } = req.query;
    if (!bookingId) throw new BadRequestError("Missing booking id");
    if (Number.isNaN(Number(bookingId)))
        throw new BadRequestError("Booking id should be number");
    const booking = await BookingsService.db.GetBookingById(Number(bookingId));
    if (!booking) throw new BadRequestError("Booking does not exist");
    if (booking.bookingStatus === BookingStatus.CANCELLED)
        throw new BadRequestError("This booking is already cancelled");
    const user = req.user;
    if (!user) throw new UnauthorizedError("Missing user info in request");
    if (
        booking?.userId === user.id ||
        user.role == Role.ADMIN ||
        user.role == Role.OWNER
    ) {
        const updatedBooking = await BookingsService.db.UpdateBookingStatus(
            Number(bookingId),
            BookingStatus.CANCELLED,
        );
        res.json({ status: "success", data: updatedBooking });
    } else {
        throw new ForbiddenError(
            "You are not allowed to cancel other user booking",
        );
    }
}

export async function UpdateBooking(req: AuthenticatedRequest, res: Response) {
    if (!req.body) throw new BadRequestError("missing required body");
    const body = req.body;
}
