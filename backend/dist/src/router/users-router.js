import { CreateUser, DeleteUser, GetAllUsers, GetAvailableUsers, UpdateUser, } from "../controllers/user-controller.js";
import { AuthorizeAdminOnly, AuthorizeAllUserRoles, } from "../middlewares/auth.js";
import express from "express";
const UserRouter = express.Router();
UserRouter.get("/", AuthorizeAllUserRoles, GetAllUsers);
UserRouter.get("/available", GetAvailableUsers);
UserRouter.post("/", AuthorizeAdminOnly, CreateUser);
UserRouter.patch("/", AuthorizeAllUserRoles, UpdateUser);
UserRouter.delete("/", AuthorizeAdminOnly, DeleteUser);
export default UserRouter;
//# sourceMappingURL=users-router.js.map