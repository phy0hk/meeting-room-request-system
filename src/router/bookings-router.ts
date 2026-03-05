import { GetBooking } from "@/controllers/bookings-controller.js";
import { AuthorizeAllUserRoles } from "@/middlewares/auth.js";
import express from "express";

const BookingsRouter = express.Router();

//To get the bookings list
BookingsRouter.get("/", AuthorizeAllUserRoles, GetBooking);

//To create new booking
// BookingsRouter.post("/",);

//To delete booking
// BookingsRouter.delete("/", (req, res) => {
//     res.send({ test: "delete success" });
// });

export default BookingsRouter;
