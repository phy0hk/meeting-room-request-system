import { prisma } from "@/config/prisma.config.js";
import type { CreateUserBody } from "@/controllers/user-controller.js";
import argon2 from "argon2";
import { Role, type tblUsers } from "generated/prisma/client.js";

const UserService = {
    db: {
        CreateNewUser,
        GetAllUsers,
        GetUserByUsername,
    },
    typeCheck: { CheckCreateUserBody },
};

function CheckCreateUserBody(body: any): CreateUserBody | null {
    if (!body.name) return null;
    if (!body.username) return null;
    if (!body.password) return null;
    if (!body.role) return null;
    if (
        body.role !== Role.ADMIN &&
        body.role !== Role.OWNER &&
        body.role !== Role.USER
    )
        return null;
    return body as CreateUserBody;
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

async function GetUserByUsername(username: string): Promise<tblUsers | null> {
    const user = await prisma.tblUsers.findFirst({ where: { username } });
    return user;
}

export default UserService;
