import {
    CreateUser,
    DeleteUser,
    GetAllUsers,
} from "@/controllers/user-controller.js";
import { AuthorizeAdminOnly } from "@/middlewares/auth.js";
import express from "express";
const UserRouter = express.Router();

UserRouter.get("/", GetAllUsers);
UserRouter.post("/", AuthorizeAdminOnly, CreateUser);
UserRouter.delete("/", AuthorizeAdminOnly, DeleteUser);
export default UserRouter;
