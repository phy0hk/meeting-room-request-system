import RoomService from "@/services/rooms-service.js";
import UserService from "@/services/users-service.js";
import { Role, UserStatus } from "generated/prisma/enums.js";

export const Initiallize = () => {
    CheckDefaultUser();
    CheckDefaultRoom();
};
export const CheckDefaultUser = async () => {
    const users = await UserService.db.GetAllUsers();
    if (
        !users ||
        users.filter((user) => user.role === Role.ADMIN).length == 0
    ) {
        UserService.db.CreateNewUser({
            name: "Admin",
            password: "defaultAdmin",
            role: Role.ADMIN,
            username: "admin",
            status: UserStatus.ACTIVE,
        });
    }
};
export const CheckDefaultRoom = async () => {
    const rooms = await RoomService.db.GetAllRooms();
    if (!rooms || rooms.length == 0) {
        RoomService.db.CreateRoom({
            capacity: 10,
            name: "Meeting Room 1",
        });
    }
};
