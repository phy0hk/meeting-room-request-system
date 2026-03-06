import RoomService from "@/services/rooms-service.js";
import { BadRequestError } from "@/utils/http-error.js";
import type { Request, Response } from "express";

export const GetAllRooms = async (req: Request, res: Response) => {
    const rooms = await RoomService.db.GetAllRooms();
    res.json({ status: "success", data: rooms });
};
export const CreateRoom = async (req: Request, res: Response) => {
    if (!req.body) throw new BadRequestError("Missing required field");
    const { name, capacity } = req.body;
    const newRoom = await RoomService.db.CreateRoom({ name, capacity });
    res.json({ status: "success", data: newRoom });
};
