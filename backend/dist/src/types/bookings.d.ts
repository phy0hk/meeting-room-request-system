export interface CreateBookingBody {
    roomId: number;
    attendeeCount: number;
    description: string;
    startTime: Date;
    endTime: Date;
}
export interface UpdateBookingBody {
    bookingId: number;
    roomId?: number;
    attendeeCount?: number;
    description?: string;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
}
//# sourceMappingURL=bookings.d.ts.map