import BookingsRouter from "../router/bookings-router.js";
import express from "express";
import UserRouter from "./users-router.js";
import AuthRouter from "./auth-router.js";
import RoomsRouter from "./rooms-router.js";

const ApiRouter = express.Router();

ApiRouter.use("/bookings", BookingsRouter);
ApiRouter.use("/users", UserRouter);
ApiRouter.use("/auth", AuthRouter);
ApiRouter.use("/rooms", RoomsRouter);

export default ApiRouter;
