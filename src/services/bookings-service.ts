import { prisma } from "@/config/prisma.config.js";
import type { tblBookings } from "generated/prisma/client.js";

const BookingsService = {
    db: { GetAllBookings, GetBookingsByUserId },
};

async function GetAllBookings(): Promise<tblBookings[] | undefined> {
    const bookings = await prisma.tblBookings.findMany();
    return bookings;
}

async function GetBookingsByUserId(
    userId: number,
): Promise<tblBookings[] | undefined> {
    const bookings = await prisma.tblBookings.findMany({ where: { userId } });
    return bookings;
}

export default BookingsService;
