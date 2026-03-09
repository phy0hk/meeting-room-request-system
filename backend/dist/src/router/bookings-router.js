import { CancelBooking, CreateBooking, GetBookings, UpdateBooking, } from "../controllers/bookings-controller.js";
import { AuthorizeAllUserRoles } from "../middlewares/auth.js";
import express from "express";
const BookingsRouter = express.Router();
//To get the bookings list
BookingsRouter.get("/", AuthorizeAllUserRoles, GetBookings);
//To create new booking
BookingsRouter.post("/", AuthorizeAllUserRoles, CreateBooking);
//To Update Booking
BookingsRouter.patch("/", AuthorizeAllUserRoles, UpdateBooking);
//To delete booking
BookingsRouter.delete("/", AuthorizeAllUserRoles, CancelBooking);
export default BookingsRouter;
//# sourceMappingURL=bookings-router.js.map