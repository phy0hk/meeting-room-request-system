import UserService from "@/services/users-service.js";
import type { AuthenticatedRequest } from "@/types/auth.js";
import type { CreateUserBody, UpdateUserBody } from "@/types/users.js";
import { BadRequestError, ForbiddenError } from "@/utils/http-error.js";
import argon2 from "argon2";
import type { NextFunction, Request, Response } from "express";
import { Role } from "generated/prisma/enums.js";

export const CreateUser = async (req: Request, res: Response) => {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const body = req.body;
    const createUserBody: CreateUserBody | null =
        UserService.typeCheck.CheckCreateUserBody(body);
    if (!createUserBody) {
        throw new BadRequestError("Missing required field in body");
    }
    const existingUser = await UserService.db.GetUserByUsername(
        createUserBody.username,
    );
    if (existingUser)
        throw new BadRequestError(
            `User with username:${createUserBody.username} already exist`,
        );
    await UserService.db.CreateNewUser(createUserBody);
    res.status(201).send();
};

export const GetAllUsers = async (_: Request, res: Response) => {
    const users = await UserService.db.GetAllUsers();
    res.json({ status: "success", data: users });
};

export const GetAvailableUsers = async (_: Request, res: Response) => {
    const users = await UserService.db.GetAvailableUsers();
    res.json({ status: "success", data: users });
};

export const DeleteUser = async (req: AuthenticatedRequest, res: Response) => {
    const { userId } = req.query;
    if (!userId) {
        throw new BadRequestError("Missing User Id");
    }
    if (Number.isNaN(Number(userId))) {
        throw new BadRequestError("User Id should be a number");
    }
    if (Number(userId) === req.user?.id) {
        throw new BadRequestError("You can't deactivate your own account");
    }
    const deactivatedUser = await UserService.db.DeactivateUserById(
        Number(userId),
    );
    res.json({ status: "success", data: deactivatedUser });
};

export const UpdateUser = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const { name, username, role, password } = req.body;
    if (!username) throw new BadRequestError("Missing required filed username");
    const updateData: UpdateUserBody = {
        name,
        role,
        password,
    };
    Object.keys(updateData).forEach(
        (key) =>
            updateData[key as keyof UpdateUserBody] === undefined &&
            delete updateData[key as keyof UpdateUserBody],
    );
    const currentUser = req.user;

    console.log(currentUser);
    if (updateData.password) {
        updateData.password = await argon2.hash(updateData.password);
    }
    if (!currentUser) throw new BadRequestError("Missing user info in request");
    if (currentUser.username === username || currentUser.role == Role.ADMIN) {
        const updatedUser = await UserService.db.UpdateUserInfo(
            updateData,
            username,
        );
        res.json({ status: "success", data: updatedUser });
    } else {
        throw new ForbiddenError("You are not allowed to update other user");
    }
};
