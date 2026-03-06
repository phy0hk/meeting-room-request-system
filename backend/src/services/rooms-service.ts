import { prisma } from "@/config/prisma.config.js";
import type { tblRooms } from "generated/prisma/client.js";
import type { tblRoomsFindManyArgs } from "generated/prisma/models.js";

const RoomService = {
    db: {
        GetRoomById,
        GetAllRooms,
        GetRoomsByFilter,
        CreateRoom,
    },
};

async function GetRoomById(id: number) {
    const room = await prisma.tblRooms.findFirst({ where: { id } });
    return room;
}
async function GetAllRooms() {
    const rooms = await prisma.tblRooms.findMany();
    return rooms;
}
async function GetRoomsByFilter(filter: tblRoomsFindManyArgs) {
    const rooms = await prisma.tblRooms.findMany(filter);
    return rooms;
}
async function CreateRoom(roomInfo: Omit<tblRooms, "id">) {
    const room = await prisma.tblRooms.create({ data: roomInfo });
    return room;
}

export default RoomService;
