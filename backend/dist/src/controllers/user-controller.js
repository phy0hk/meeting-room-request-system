import UserService from "../services/users-service.js";
import { BadRequestError, ForbiddenError } from "../utils/http-error.js";
import argon2 from "argon2";
import { Role } from "../../generated/prisma/enums.js";
export const CreateUser = async (req, res) => {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const body = req.body;
    const createUserBody = UserService.typeCheck.CheckCreateUserBody(body);
    if (!createUserBody) {
        throw new BadRequestError("Missing required field in body");
    }
    const existingUser = await UserService.db.GetUserByUsername(createUserBody.username);
    if (existingUser)
        throw new BadRequestError(`User with username:${createUserBody.username} already exist`);
    await UserService.db.CreateNewUser(createUserBody);
    res.status(201).send();
};
export const GetAllUsers = async (_, res) => {
    const users = await UserService.db.GetAllUsers();
    res.json({ status: "success", data: users });
};
export const GetAvailableUsers = async (_, res) => {
    const users = await UserService.db.GetAvailableUsers();
    res.json({ status: "success", data: users });
};
export const DeleteUser = async (req, res) => {
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
    const deactivatedUser = await UserService.db.DeactivateUserById(Number(userId));
    res.json({ status: "success", data: deactivatedUser });
};
export const UpdateUser = async (req, res) => {
    if (!req.body) {
        throw new BadRequestError("Missing required body");
    }
    const { name, username, role, password } = req.body;
    if (!username)
        throw new BadRequestError("Missing required filed username");
    const updateData = {
        name,
        role,
        password,
    };
    Object.keys(updateData).forEach((key) => updateData[key] === undefined &&
        delete updateData[key]);
    const currentUser = req.user;
    if (updateData.password !== "" &&
        updateData.password?.trim() !== "" &&
        updateData.password !== undefined) {
        updateData.password = await argon2.hash(updateData.password);
    }
    if (!currentUser)
        throw new BadRequestError("Missing user info in request");
    if (currentUser.username === username || currentUser.role == Role.ADMIN) {
        if (currentUser.role == Role.ADMIN) {
            const updatedUser = await UserService.db.UpdateUserInfo(updateData, username);
            res.json({ status: "success", data: updatedUser });
        }
        else {
            const updateUser = await UserService.db.UpdateUserInfo({ ...updateData, role: currentUser.role }, username);
            res.json({ status: "success", data: updateUser });
        }
    }
    else {
        throw new ForbiddenError("You are not allowed to update other user");
    }
};
//# sourceMappingURL=user-controller.js.map