import { AuthorizeAdminOnly, AuthorizeOwnerOnly } from "@/middlewares/auth.js";
import BookingsService from "@/services/bookings-service.js";
import type { NextFunction, Request, Response } from "express";

export const GetBooking = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { userId } = req.query;
    let bookings = [];
    if (!userId) {
        const bookings = await BookingsService.db.GetAllBookings();
        res.send({ status: "success", bookings });
    } else {
        const bookings = await BookingsService.db.GetBookingsByUserId(
            Number(userId),
        );
        res.send({ status: "success", bookings });
    }
};

export async function CreateBooking(
    req: Request,
    res: Response,
    next: NextFunction,
) {}
