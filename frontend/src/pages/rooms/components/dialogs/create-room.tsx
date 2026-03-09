import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import type { SubmitEvent } from "react";

const CreateRoomDialog = ({ refetch }: { refetch: () => void }) => {
    const { openErrorDialog } = useDialog();
    const handleOnCreate = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const roomName = formData.get("room");
        api.post("/api/rooms", { name: roomName }).catch((err) =>
            openErrorDialog(err.response.data.message),
        );
        (document.getElementById("create_room") as HTMLDialogElement).close();
        refetch();
    };
    return (
        <dialog id="create_room" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Room</h3>
                <form className="py-4 flex gap-2" onSubmit={handleOnCreate}>
                    <input
                        type="text"
                        name="room"
                        required
                        placeholder="Enter room name"
                        className="input w-full"
                    />
                    <button type="submit" className="btn">
                        Create
                    </button>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default CreateRoomDialog;
