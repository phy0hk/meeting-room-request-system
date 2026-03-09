import type { Room } from "./room";
import type { User } from "./users";

export enum BookingStatus {
    CONFIRMED = "CONFIRMED",
    COMPLETED = "CONPLETED",
    CANCELLED = "CANCELLED",
}

export interface BookingData {
    attendeeCount: number;
    id: number;
    bookingStatus: BookingStatus;
    description: string;
    createdAt: Date;
    user: User;
    room: Room;
    startTime: Date;
    endTime: Date;
}
