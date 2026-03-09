import { CreateRoom, GetAllRooms } from "../controllers/rooms-controller.js";
import { AuthorizeAdminOnly, AuthorizeAllUserRoles, } from "../middlewares/auth.js";
import express from "express";
const RoomsRouter = express.Router();
RoomsRouter.get("/", AuthorizeAllUserRoles, GetAllRooms);
RoomsRouter.post("/", AuthorizeAdminOnly, CreateRoom);
// RoomsRouter.patch("/",);
export default RoomsRouter;
//# sourceMappingURL=rooms-router.js.map