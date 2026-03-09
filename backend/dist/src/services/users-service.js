import { prisma } from "../config/prisma.config.js";
import { BadRequestError, NotFoundError } from "../utils/http-error.js";
import argon2 from "argon2";
import { BookingStatus, Role, UserStatus, } from "../../generated/prisma/client.js";
const UserService = {
    db: {
        CreateNewUser,
        GetAllUsers,
        GetUserByUsername,
        GetUserByFilter,
        DeactivateUserById,
        UpdateUserInfo,
        GetAvailableUsers,
    },
    typeCheck: { CheckCreateUserBody },
};
function CheckCreateUserBody(body) {
    const user = body;
    if (!body.name)
        throw new BadRequestError("Missing required field name");
    if (!body.username)
        throw new BadRequestError("Missing required field username");
    if (!body.password)
        throw new BadRequestError("Missing required field password");
    if (!body.role)
        user.role = Role.USER;
    if (body.role !== Role.ADMIN &&
        body.role !== Role.OWNER &&
        body.role !== Role.USER)
        user.role = Role.USER;
    if (!body.status)
        user.status = UserStatus.ACTIVE;
    if (body.status !== UserStatus.ACTIVE &&
        body.status !== UserStatus.INACTIVE)
        user.status = UserStatus.ACTIVE;
    return user;
}
//Database Process
async function CreateNewUser({ name, username, password, role, }) {
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
async function GetAllUsers() {
    const allUsers = await prisma.tblUsers.findMany({
        select: {
            id: true,
            name: true,
            bookings: true,
            role: true,
            status: true,
            username: true,
        },
    });
    return allUsers.sort((a, b) => a.id - b.id);
}
async function GetAvailableUsers() {
    const users = await prisma.tblUsers.findMany({
        where: {
            status: UserStatus.ACTIVE,
        },
        select: {
            name: true,
            id: true,
            username: true,
            role: true,
            status: true,
        },
    });
    return users.sort((a, b) => a.id - b.id);
}
async function GetUserByFilter(filter) {
    const users = await prisma.tblUsers.findMany(filter);
    return users;
}
async function GetUserByUsername(username) {
    const user = await prisma.tblUsers.findFirst({ where: { username } });
    return user;
}
async function DeactivateUserById(userId) {
    const findUserFirst = await prisma.tblUsers.findFirst({
        where: { id: userId },
    });
    if (!findUserFirst)
        throw new NotFoundError("User Not Found");
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
async function UpdateUserInfo(updateUserInfo, username) {
    const updated = await prisma.tblUsers.update({
        where: {
            username,
        },
        data: {
            ...(updateUserInfo.name && { name: updateUserInfo.name }),
            ...(updateUserInfo.role && { role: updateUserInfo.role }),
            ...(updateUserInfo.password && {
                password: updateUserInfo.password,
            }),
        },
    });
    return updated;
}
export default UserService;
//# sourceMappingURL=users-service.js.map