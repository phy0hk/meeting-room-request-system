import BookingsService from "../services/bookings-service.js";
import { BookingStatus } from "../../generated/prisma/enums.js";
const StartSchedular = () => {
    setInterval(() => {
        IsBookingIsCompleted();
    }, 5000);
};
async function IsBookingIsCompleted() {
    const currentTime = new Date();
    const completedBookings = await BookingsService.db.GetBookingsByFilter({
        where: {
            endTime: {
                lt: currentTime,
            },
            bookingStatus: BookingStatus.CONFIRMED,
        },
    });
    completedBookings?.forEach((booking) => {
        BookingsService.db.UpdateBookingStatus(booking.id, BookingStatus.COMPLETED);
    });
}
export default StartSchedular;
//# sourceMappingURL=schedular.js.map