import UserService from "@/services/users-service.js";
import { BadRequestError } from "@/utils/error.js";
import type { NextFunction, Request, Response } from "express";
import type { Role } from "generated/prisma/enums.js";
export interface CreateUserBody {
    name: string;
    username: string;
    password: string;
    role: Role;
}

export const CreateUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const body = req.body;
    const createUserBody: CreateUserBody | null =
        UserService.typeCheck.CheckCreateUserBody(body);
    if (!createUserBody) {
        throw new BadRequestError("Missing required field in body");
    }
    UserService.db.CreateNewUser(createUserBody);
    res.json({ status: "success" });
};

export const GetAllUsers = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const users = UserService.db.GetAllUsers();
    res.json({ status: "success", users });
};

export const DeleteUser = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {};
