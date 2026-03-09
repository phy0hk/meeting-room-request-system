import api from "@/config/default-api";
import RoomsTable from "./components/rooms-table";
import { useQuery } from "@tanstack/react-query";
import type { Room } from "@/types/room";
import { Plus } from "lucide-react";
import RoomDialog from "./components/dialogs/dialogs";

const GetRooms = async () => {
    const { data } = await api.get("/api/rooms");
    return data.data;
};
const RoomPage = () => {
    const { data, refetch } = useQuery<Room[]>({
        queryKey: ["rooms"],
        queryFn: GetRooms,
    });
    return (
        <div className="flex flex-col gap-2">
            <RoomDialog refetch={refetch} />
            <div>
                <h2 className="font-semibold ">Rooms</h2>
            </div>
            <RoomsTable data={data} />
            <button
                className="btn absolute bottom-5 right-5 btn-square btn-primary"
                onClick={() =>
                    (
                        document.getElementById(
                            "create_room",
                        ) as HTMLDialogElement
                    )?.showModal()
                }
            >
                <Plus className="absolute" />
            </button>
        </div>
    );
};
export default RoomPage;
