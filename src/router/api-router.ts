import BookingsRouter from "@/router/bookings.router.js";
import express from "express";
import UserRouter from "./users.router.js";

const ApiRouter = express.Router();

ApiRouter.use("/bookings", BookingsRouter);
ApiRouter.use("/users", UserRouter);

export default ApiRouter;
