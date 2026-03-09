import type { tblRooms } from "../../generated/prisma/client.js";
import type { tblRoomsFindManyArgs } from "../../generated/prisma/models.js";
declare const RoomService: {
    db: {
        GetRoomById: typeof GetRoomById;
        GetAllRooms: typeof GetAllRooms;
        GetRoomsByFilter: typeof GetRoomsByFilter;
        CreateRoom: typeof CreateRoom;
    };
};
declare function GetRoomById(id: number): Promise<{
    id: number;
    name: string;
} | null>;
declare function GetAllRooms(): Promise<{
    id: number;
    name: string;
}[]>;
declare function GetRoomsByFilter(filter: tblRoomsFindManyArgs): Promise<{
    id: number;
    name: string;
}[]>;
declare function CreateRoom(roomInfo: Omit<tblRooms, "id">): Promise<{
    id: number;
    name: string;
}>;
export default RoomService;
//# sourceMappingURL=rooms-service.d.ts.map