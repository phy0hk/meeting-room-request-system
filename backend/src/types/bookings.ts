export interface CreateBookingBody {
    roomId: number;
    attendeeCount: number;
    startTime: Date;
    endTime: Date;
}

export interface UpdateBookingBody extends Partial<CreateBookingBody> {
    bookingId: number;
}
