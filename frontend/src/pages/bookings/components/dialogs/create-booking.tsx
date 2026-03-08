import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type SubmitEvent } from "react";
import { DateAndTimePicker } from "react-daisyui-timetools";

const getRooms = async () => {
    const { data } = await api.get("/api/rooms");
    return data.data;
};
const CreateBookingDialog = ({ refetch }: { refetch: () => void }) => {
    const { data: rooms } = useQuery({
        queryKey: ["rooms"],
        queryFn: getRooms,
    });
    const { openErrorDialog } = useDialog();
    const currentTime = new Date();
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const room = formData.get("room");
        const description = formData.get("description");
        const seats = formData.get("seats");
        api.post("/api/bookings", {
            roomId: Number(room),
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            description: description,
            attendeeCount: Number(seats),
        })
            .then(() => refetch())
            .catch((err) => openErrorDialog(err.response.data.message));
        (
            document.getElementById("create_booking") as HTMLDialogElement
        )?.close();
    };
    useEffect(() => {
        console.log(startTime.toLocaleTimeString());
    }, [startTime]);
    return (
        <dialog id="create_booking" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Booking</h3>
                <form
                    className="py-4 flex w-full gap-2 flex-col"
                    onSubmit={handleSubmit}
                >
                    <select className="select w-full" name="room">
                        <option disabled={true}>Pick a room</option>
                        {rooms &&
                            rooms.length > 0 &&
                            rooms.map((room: any) => (
                                <option key={room.id} value={room.id}>
                                    {room.name}
                                </option>
                            ))}
                    </select>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            required
                            placeholder="Internal Meeting"
                            className="input w-full"
                        />
                    </div>
                    <div>
                        <label>Start Time</label>
                        <DateAndTimePicker
                            value={startTime}
                            minDate={
                                new Date(
                                    currentTime.setHours(
                                        currentTime.getHours() - 1,
                                    ),
                                )
                            }
                            onChange={(date) => setStartTime(new Date(date))}
                            locale="en"
                        />
                    </div>
                    <div>
                        <label>End Time</label>
                        <DateAndTimePicker
                            value={endTime}
                            minDate={startTime}
                            onChange={(date) => setEndTime(new Date(date))}
                            locale="en"
                        />
                    </div>
                    <div>
                        <label>Number of seats</label>
                        <input
                            type="number"
                            name="seats"
                            required
                            min={1}
                            defaultValue={1}
                            className="input w-full"
                        />
                    </div>

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
export default CreateBookingDialog;
