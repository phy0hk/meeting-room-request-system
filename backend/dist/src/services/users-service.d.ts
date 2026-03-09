import type { CreateUserBody, UpdateUserBody, User } from "../types/users.js";
import { BookingStatus, Role, UserStatus, type tblUsers } from "../../generated/prisma/client.js";
import type { tblUsersFindManyArgs } from "../../generated/prisma/models.js";
declare const UserService: {
    db: {
        CreateNewUser: typeof CreateNewUser;
        GetAllUsers: typeof GetAllUsers;
        GetUserByUsername: typeof GetUserByUsername;
        GetUserByFilter: typeof GetUserByFilter;
        DeactivateUserById: typeof DeactivateUserById;
        UpdateUserInfo: typeof UpdateUserInfo;
        GetAvailableUsers: typeof GetAvailableUsers;
    };
    typeCheck: {
        CheckCreateUserBody: typeof CheckCreateUserBody;
    };
};
declare function CheckCreateUserBody(body: any): CreateUserBody;
declare function CreateNewUser({ name, username, password, role, }: Omit<tblUsers, "id">): Promise<tblUsers>;
declare function GetAllUsers(): Promise<{
    id: number;
    name: string;
    bookings: {
        id: number;
        userId: number;
        description: string;
        attendeeCount: number;
        bookingStatus: BookingStatus;
        startTime: Date;
        endTime: Date;
        createdAt: Date;
        roomId: number;
    }[];
    username: string;
    role: Role;
    status: UserStatus;
}[]>;
declare function GetAvailableUsers(): Promise<User[] | undefined>;
declare function GetUserByFilter(filter: tblUsersFindManyArgs): Promise<tblUsers[] | undefined>;
declare function GetUserByUsername(username: string): Promise<tblUsers | null>;
declare function DeactivateUserById(userId: number): Promise<{
    updatedUser: Omit<tblUsers, "password">;
    cancelledCount: number;
}>;
declare function UpdateUserInfo(updateUserInfo: UpdateUserBody, username: string): Promise<Omit<tblUsers, "password"> | undefined>;
export default UserService;
//# sourceMappingURL=users-service.d.ts.map