import { GetBooking } from "@/controllers/bookings.controller.js";
import express from "express";

const BookingsRouter = express.Router();

//To get the bookings list
BookingsRouter.get("/", GetBooking);

//To create new booking
BookingsRouter.post("/", (req, res) => {
    res.send({ test: "create success" });
});

//To delete booking
BookingsRouter.delete("/", (req, res) => {
    res.send({ test: "delete success" });
});

export default BookingsRouter;
