import UserService from "@/services/users-service.js";
import { Role } from "generated/prisma/enums.js";

export const Initiallize = () => {
    CheckDefaultUser();
};
export const CheckDefaultUser = async () => {
    const users = await UserService.db.GetAllUsers();
    if (!users || users.findIndex((user) => user.username === "admin") === -1) {
        UserService.db.CreateNewUser({
            name: "Admin",
            password: "defaultAdmin",
            role: Role.ADMIN,
            username: "admin",
        });
    }
};
