import { prisma } from "../config/prisma.config.js";
const RoomService = {
    db: {
        GetRoomById,
        GetAllRooms,
        GetRoomsByFilter,
        CreateRoom,
    },
};
async function GetRoomById(id) {
    const room = await prisma.tblRooms.findFirst({ where: { id } });
    return room;
}
async function GetAllRooms() {
    const rooms = await prisma.tblRooms.findMany();
    return rooms;
}
async function GetRoomsByFilter(filter) {
    const rooms = await prisma.tblRooms.findMany(filter);
    return rooms;
}
async function CreateRoom(roomInfo) {
    const room = await prisma.tblRooms.create({ data: roomInfo });
    return room;
}
export default RoomService;
//# sourceMappingURL=rooms-service.js.map