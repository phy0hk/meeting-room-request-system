const CancelBookingDialog = ({
    handleCancelBooking,
}: {
    handleCancelBooking: () => void;
}) => {
    return (
        <dialog id="cancel_booking" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Cancel Booking</h3>
                <p className="py-4">
                    Are you sure you want to cancel this booking
                </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={handleCancelBooking}>
                            Confirm
                        </button>
                    </form>

                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default CancelBookingDialog;
