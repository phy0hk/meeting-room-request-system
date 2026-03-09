import type { BookingData } from "@/types/bookings";
import CancelBookingDialog from "./cancel-booking";
import CreateBookingDialog from "./create-booking";
import UpdateBooking from "./updateBooking";

const BookingsDialog = ({
    refetch,
    selected,
}: {
    refetch: () => void;
    selected?: BookingData;
}) => {
    return (
        <>
            <CancelBookingDialog refetch={refetch} currentSelected={selected} />
            <CreateBookingDialog refetch={refetch} />
            <UpdateBooking refetch={refetch} currentSelected={selected} />
        </>
    );
};
export default BookingsDialog;
