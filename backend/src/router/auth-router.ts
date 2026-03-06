import { Login } from "@/controllers/auth-controller.js";
import express from "express";
const AuthRouter = express.Router();

AuthRouter.post("/", Login);
AuthRouter.use("/check", (req, res) => {
    res.json({ status: "Success" });
});
export default AuthRouter;
