import type { CreateBookingBody, UpdateBookingBody } from "../types/bookings.js";
import { BookingStatus, type tblBookings } from "../../generated/prisma/client.js";
import type { tblBookingsFindManyArgs } from "../../generated/prisma/models.js";
declare const BookingsService: {
    db: {
        GetAllBookings: typeof GetAllBookings;
        GetBookingsByUserId: typeof GetBookingsByUserId;
        GetBookingById: typeof GetBookingById;
        GetBookingsByFilter: typeof GetBookingsByFilter;
        CreateBooking: typeof CreateBooking;
        UpdateBookingStatus: typeof UpdateBookingStatus;
        UpdateBooking: typeof UpdateBooking;
    };
    typeCheck: {
        CheckCreateBookingBody: typeof CheckCreateBookingBody;
        CheckUpdateBookingBody: typeof CheckUpdateBookingBody;
    };
};
declare function CheckCreateBookingBody(body: any): CreateBookingBody;
declare function CheckUpdateBookingBody(body: any): UpdateBookingBody;
declare function GetAllBookings(): Promise<{
    id: number;
    description: string;
    attendeeCount: number;
    bookingStatus: BookingStatus;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    user: {
        id: number;
        name: string;
        username: string;
    };
    room: {
        id: number;
        name: string;
    };
}[]>;
declare function GetBookingsByFilter(filter: tblBookingsFindManyArgs): Promise<tblBookings[] | undefined>;
declare function GetBookingById(bookingId: number): Promise<tblBookings | null>;
declare function GetBookingsByUserId(userId: number): Promise<tblBookings[] | undefined>;
declare function CreateBooking(bookingInfo: Omit<tblBookings, "id">): Promise<{
    id: number;
    userId: number;
    description: string;
    attendeeCount: number;
    bookingStatus: BookingStatus;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    roomId: number;
}>;
declare function UpdateBookingStatus(bookingId: number, status: BookingStatus): Promise<{
    id: number;
    userId: number;
    description: string;
    attendeeCount: number;
    bookingStatus: BookingStatus;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    roomId: number;
}>;
export declare function UpdateBooking(bookingId: number, updateData: UpdateBookingBody): Promise<{
    id: number;
    userId: number;
    description: string;
    attendeeCount: number;
    bookingStatus: BookingStatus;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    roomId: number;
}>;
export default BookingsService;
//# sourceMappingURL=bookings-service.d.ts.map