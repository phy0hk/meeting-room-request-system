import { SECRET_KEY } from "@/config/auth.js";
import UserService from "@/services/users-service.js";
import type { AuthenticatedRequest, LoginTokenPayload } from "@/types/auth.js";
import { UnauthorizedError } from "@/utils/http-error.js";
import type { NextFunction, Request, Response } from "express";
import type { tblUsers } from "generated/prisma/browser.js";
import { Role, UserStatus } from "generated/prisma/enums.js";
import jwt from "jsonwebtoken";

//Allow all authenticated users
export const Authenticate = async (req: AuthenticatedRequest) => {
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
    const user: Omit<tblUsers, "password"> = userInfo as tblUsers;
    const dbUser = await UserService.db.GetUserByUsername(user.username);
    if (dbUser?.status == UserStatus.INACTIVE)
        throw new UnauthorizedError("This user is deactivated");
    req.user = user;
    return userInfo as LoginTokenPayload;
};

export const AuthorizeAllUserRoles = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    await Authenticate(req);
    next();
};

//Allow only user with admin role
export const AuthorizeAdminOnly = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = await Authenticate(req);
    if (userInfo.role !== Role.ADMIN) {
        throw new UnauthorizedError("Action Not Allowed");
    }
    next();
};

//Allow only user with owner role
export const AuthorizeOwnerOnly = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = await Authenticate(req);
    if (userInfo.role !== Role.OWNER) {
        throw new UnauthorizedError("Action Not Allowed");
    }
    next();
};

//Allow user with admin or owner role
export const AuthorizeAdminAndOwner = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    const userInfo = await Authenticate(req);
    if (userInfo.role !== Role.ADMIN && userInfo.role !== Role.OWNER) {
        throw new UnauthorizedError("Action Not Allowed");
    }
    next();
};
