import { SECRET_KEY } from "@/config/auth.js";
import type { LoginTokenPayload } from "@/controllers/auth-controller.js";
import { UnauthorizedError } from "@/utils/error.js";
import type { NextFunction, Request, Response } from "express";
import { Role } from "generated/prisma/enums.js";
import jwt from "jsonwebtoken";

//Allow all authenticated users
export const Authenticate = (req: Request) => {
    const cookies = req.cookies;
    if (!cookies) {
        throw new UnauthorizedError("Invalid Authentication");
    }
    if (!cookies.auth_token) {
        throw new UnauthorizedError("Missing Token");
    }
    const userInfo = jwt.verify(cookies.auth_token, SECRET_KEY);
    if (!userInfo) {
        throw new UnauthorizedError("Invalid Token");
    }
    return userInfo as LoginTokenPayload;
};

export const AuthorizeAllUserRoles = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    Authenticate(req);
    next();
};

//Allow only user with admin role
export const AuthorizeAdminOnly = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = Authenticate(req);
    if (userInfo.role !== Role.ADMIN) {
        throw new UnauthorizedError("Action Not Allowed");
    }
    next();
};

//Allow only user with owner role
export const AuthorizeOwnerOnly = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = Authenticate(req);
    if (userInfo.role !== Role.OWNER) {
        throw new UnauthorizedError("Action Not Allowed");
    }
};

//Allow user with admin or owner role
export const AuthorizeAdminAndOwner = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = Authenticate(req);
    if (userInfo.role !== Role.ADMIN && userInfo.role !== Role.OWNER) {
        throw new UnauthorizedError("Action Not Allowed");
    }
};
