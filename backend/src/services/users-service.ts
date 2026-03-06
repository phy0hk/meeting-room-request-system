import { prisma } from "@/config/prisma.config.js";
import type { CreateUserBody, UpdateUserBody } from "@/types/users.js";
import {
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from "@/utils/http-error.js";
import argon2 from "argon2";
import {
    BookingStatus,
    Role,
    UserStatus,
    type tblUsers,
} from "generated/prisma/client.js";
import type { tblUsersFindManyArgs } from "generated/prisma/models.js";

const UserService = {
    db: {
        CreateNewUser,
        GetAllUsers,
        GetUserByUsername,
        GetUserByFilter,
        DeactivateUserById,
        UpdateUserInfo,
    },
    typeCheck: { CheckCreateUserBody },
};

function CheckCreateUserBody(body: any): CreateUserBody {
    const user = body;
    if (!body.name) throw new BadRequestError("Missing required field name");
    if (!body.username)
        throw new BadRequestError("Missing required field username");
    if (!body.password)
        throw new BadRequestError("Missing required field password");
    if (!body.role) user.role = Role.USER;
    if (
        body.role !== Role.ADMIN &&
        body.role !== Role.OWNER &&
        body.role !== Role.USER
    )
        user.role = Role.USER;
    if (!body.status) user.status = UserStatus.ACTIVE;
    if (
        body.status !== UserStatus.ACTIVE &&
        body.status !== UserStatus.INACTIVE
    )
        user.status = UserStatus.ACTIVE;
    return user as CreateUserBody;
}

//Database Process
async function CreateNewUser({
    name,
    username,
    password,
    role,
}: Omit<tblUsers, "id">): Promise<tblUsers> {
    const hashedPassword = await argon2.hash(password);

    const user = await prisma.tblUsers.create({
        data: {
            name,
            password: hashedPassword,
            role,
            username,
        },
    });
    return user;
}

async function GetAllUsers(): Promise<tblUsers[] | undefined> {
    const allUsers = await prisma.tblUsers.findMany();
    return allUsers;
}

async function GetUserByFilter(
    filter: tblUsersFindManyArgs,
): Promise<tblUsers[] | undefined> {
    const users = await prisma.tblUsers.findMany(filter);
    return users;
}

async function GetUserByUsername(username: string): Promise<tblUsers | null> {
    const user = await prisma.tblUsers.findFirst({ where: { username } });
    return user;
}

async function DeactivateUserById(userId: number): Promise<{
    updatedUser: Omit<tblUsers, "password">;
    cancelledCount: number;
}> {
    const findUserFirst = await prisma.tblUsers.findFirst({
        where: { id: userId },
    });
    if (!findUserFirst) throw new NotFoundError("User Not Found");
    if (findUserFirst.status === UserStatus.INACTIVE) {
        throw new BadRequestError("User is already deactivated");
    }
    const now = new Date();
    const [updatedUser, cancelledBookings] = await prisma.$transaction([
        prisma.tblUsers.update({
            where: { id: userId },
            data: { status: UserStatus.INACTIVE },
        }),
        prisma.tblBookings.updateMany({
            where: {
                userId: userId,
                startTime: {
                    gt: now,
                },
            },
            data: { bookingStatus: BookingStatus.CANCELLED },
        }),
    ]);
    return { updatedUser, cancelledCount: cancelledBookings.count };
}
async function UpdateUserInfo(
    updateUserInfo: UpdateUserBody,
    username: string,
): Promise<Omit<tblUsers, "password"> | undefined> {
    const updated = await prisma.tblUsers.update({
        where: {
            username,
        },
        data: updateUserInfo,
    });
    return updated;
}
export default UserService;
