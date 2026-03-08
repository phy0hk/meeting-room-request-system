import AuthService from "@/services/auth-service.js";
import { BadRequestError, UnauthorizedError } from "@/utils/http-error.js";
import type { CookieOptions, NextFunction, Request, Response } from "express";
import argon2 from "argon2";
import UserService from "@/services/users-service.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "@/config/auth.js";
import { Role, UserStatus } from "generated/prisma/enums.js";

export const Login = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const body = req.body;
    res.clearCookie("auth_token");
    if (!body) {
        throw new BadRequestError("Missing required body");
    }
    const loginBody = AuthService.typeCheck.LoginBodyCheck(body);
    if (!loginBody) {
        throw new BadRequestError("Missing required field");
    }
    const user = await UserService.db.GetUserByUsername(loginBody.username);
    if (!user) {
        throw new UnauthorizedError("User not found");
    }
    if (user.status == UserStatus.INACTIVE) {
        throw new UnauthorizedError("This account has been deactivated");
    }
    const verification = await argon2.verify(user.password, loginBody.password);

    if (!verification) {
        throw new UnauthorizedError("Invalid username or password");
    }
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            name: user.name,
            role: user.role,
        },
        SECRET_KEY,
    );
    const cookieOptions: CookieOptions = {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 3600000,
    };
    res.cookie("auth_token", token, cookieOptions)
        .status(200)
        .send({
            status: "success",
            message: "Login successfully",
            data: {
                id: user.id,
                name: user.name,
                username: user.username,
                status: user.status,
                role: user.role,
            },
        });
};

export const Logout = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.clearCookie("auth_token").json({ status: "success" });
};
