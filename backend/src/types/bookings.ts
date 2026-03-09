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
    startTime?: Date | undefined; // Add | undefined here
    endTime?: Date | undefined; // Add | undefined here
}
