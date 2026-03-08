import CancelBookingDialog from "./cancel-booking";
import CreateBookingDialog from "./create-booking";

const BookingsDialog = ({
    cancelBooking,
    refetch,
}: {
    cancelBooking: () => void;
    refetch: () => void;
}) => {
    return (
        <>
            <CancelBookingDialog handleCancelBooking={cancelBooking} />
            <CreateBookingDialog refetch={refetch} />
        </>
    );
};
export default BookingsDialog;
