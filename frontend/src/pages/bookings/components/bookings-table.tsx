import { BookingStatus } from "@/types/bookings";
import { UserRole } from "@/types/utils";
import { getCurrentUser } from "@/utils/current-user";
import { type Dispatch, type SetStateAction } from "react";

const BookingsTable = ({
    data,
    currentSelected,
}: {
    data: any[] | undefined;
    currentSelected: Dispatch<SetStateAction<number>>;
}) => {
    const currentUser = getCurrentUser();

    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th>User</th>
                        <th>Room</th>
                        <th>Attendee Count</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Booking Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.length > 0 &&
                        data.map((booking) => (
                            <tr key={booking.id}>
                                <th>{booking.id}</th>
                                <td>{booking.description}</td>
                                <td>{booking.user.name}</td>
                                <td>{booking.room.name}</td>
                                <td>{booking.attendeeCount}</td>
                                <td>
                                    {new Date(
                                        booking.startTime,
                                    ).toLocaleString()}
                                </td>
                                <td>
                                    {new Date(booking.endTime).toLocaleString()}
                                </td>
                                <td>{booking.bookingStatus}</td>
                                <td>
                                    <button
                                        className="btn btn-error btn-sm"
                                        onClick={() => {
                                            currentSelected(booking.id);
                                            (
                                                document.getElementById(
                                                    "cancel_booking",
                                                ) as HTMLDialogElement
                                            )?.showModal();
                                        }}
                                        disabled={
                                            (currentUser.id !==
                                                booking.user.id && // Not the person who booked
                                                currentUser.role !==
                                                    UserRole.OWNER && // AND not an Owner
                                                currentUser.role !==
                                                    UserRole.ADMIN) || // AND not an Admina
                                            booking.bookingStatus !==
                                                BookingStatus.CONFIRMED
                                        }
                                    >
                                        {/*<X className="w-full h-full" />*/}
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
export default BookingsTable;
