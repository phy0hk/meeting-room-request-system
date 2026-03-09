import RoomService from "../services/rooms-service.js";
import { BadRequestError } from "../utils/http-error.js";
export const GetAllRooms = async (req, res) => {
    const rooms = await RoomService.db.GetAllRooms();
    res.json({ status: "success", data: rooms });
};
export const CreateRoom = async (req, res) => {
    if (!req.body)
        throw new BadRequestError("Missing required field");
    const { name } = req.body;
    const newRoom = await RoomService.db.CreateRoom({ name });
    res.json({ status: "success", data: newRoom });
};
//# sourceMappingURL=rooms-controller.js.map