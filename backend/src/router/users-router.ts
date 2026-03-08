import {
    CreateUser,
    DeleteUser,
    GetAllUsers,
    GetAvailableUsers,
    UpdateUser,
} from "@/controllers/user-controller.js";
import {
    AuthorizeAdminAndOwner,
    AuthorizeAdminOnly,
    AuthorizeAllUserRoles,
} from "@/middlewares/auth.js";
import express from "express";
const UserRouter = express.Router();

UserRouter.get("/", AuthorizeAdminAndOwner, GetAllUsers);
UserRouter.get("/available", GetAvailableUsers);
UserRouter.post("/", AuthorizeAdminOnly, CreateUser);
UserRouter.patch("/", AuthorizeAllUserRoles, UpdateUser);
UserRouter.delete("/", AuthorizeAdminOnly, DeleteUser);

export default UserRouter;
