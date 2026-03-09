import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import type { BookingData } from "@/types/bookings";
import type { Room } from "@/types/room";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type SubmitEvent } from "react";
import { DateAndTimePicker } from "react-daisyui-timetools";

const getRooms = async () => {
    const { data } = await api.get("/api/rooms");
    return data.data;
};
const UpdateBooking = ({
    currentSelected,
    refetch,
}: {
    currentSelected?: BookingData;
    refetch: () => void;
}) => {
    const { data: rooms } = useQuery<Room[]>({
        queryKey: ["rooms"],
        queryFn: getRooms,
    });
    const currentTime = new Date();
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(
        new Date(currentSelected?.endTime || ""),
    );
    const { openErrorDialog } = useDialog();
    useEffect(() => {
        const handleLoad = () => {
            setStartTime(new Date(currentSelected?.startTime || ""));
            setEndTime(new Date(currentSelected?.endTime || ""));
        };
        handleLoad();
    }, [currentSelected]);
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const room = formData.get("room");
        const description = formData.get("description");
        const seats = formData.get("seats");
        api.patch("/api/bookings", {
            bookingId: currentSelected?.id,
            roomId: Number(room),
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            description: description,
            attendeeCount: Number(seats),
        })
            .then(() => {
                refetch();
            })
            .catch((err) => openErrorDialog(err.response.data.message));
        (document.getElementById("edit_booking") as HTMLDialogElement)?.close();
    };
    return (
        <dialog id="edit_booking" className="modal">
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
                            defaultValue={currentSelected?.description}
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
                        Update
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
export default UpdateBooking;
