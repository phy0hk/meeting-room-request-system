import { Login, Logout } from "@/controllers/auth-controller.js";
import express from "express";
const AuthRouter = express.Router();

AuthRouter.post("/", Login);
AuthRouter.get("/logout", Logout);
AuthRouter.use("/check", (_, res) => {
    res.json({ status: "Success" });
});
export default AuthRouter;
