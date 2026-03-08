export interface CreateBookingBody {
    roomId: number;
    attendeeCount: number;
    description: string;
    startTime: Date;
    endTime: Date;
}

export interface UpdateBookingBody extends Partial<CreateBookingBody> {
    bookingId: number;
}
