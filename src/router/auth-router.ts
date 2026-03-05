import { Login } from "@/controllers/auth-controller.js";
import express from "express";
const AuthRouter = express.Router();

AuthRouter.post("/login", Login);
// AuthRouter.post("/check", AuthorizeOwnerOnly, (req, res) => {
//     res.json({ status: "Success" });
// });
export default AuthRouter;
