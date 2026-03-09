import api from "@/config/default-api";
import BookingsTable from "./components/bookings-table";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BookingsDialog from "./components/dialogs/dialogs";
import { Plus } from "lucide-react";
import type { User } from "@/types/users";
import { BookingStatus, type BookingData } from "@/types/bookings";
import { getCurrentUser } from "@/utils/current-user";
import { UserRole } from "@/types/utils";
const LoadBookingsData = async () => {
    const { data } = await api.get("/api/bookings");
    return data.data;
};
const GetAllUsers = async () => {
    const { data } = await api.get("/api/users");
    return data.data;
};
const BookingsPage = () => {
    const { data, refetch } = useQuery<BookingData[]>({
        queryKey: ["bookings"],
        queryFn: LoadBookingsData,
    });
    const { data: AllUsers } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: GetAllUsers,
    });
    const currentUser = getCurrentUser();
    const [filterData, setFilterData] = useState<BookingData[] | undefined>(
        data,
    );
    const [filterBy, setFilterBy] = useState<{
        userId: string;
        status: BookingStatus | "All";
    }>({
        userId: currentUser.id.toString(),
        status: "All",
    });
    const [currentSelected, setCurrentSelected] = useState<BookingData>();

    useEffect(() => {
        const handleFilter = () => {
            setFilterData(data);
            let newFilterData: BookingData[] | undefined = data;
            if (!filterBy) return;
            console.log(filterBy.userId);
            if (filterBy.userId !== "All" && newFilterData !== undefined) {
                newFilterData = newFilterData.filter(
                    (item) => item.user.id === Number(filterBy.userId),
                );
            }

            if (filterBy.status !== "All" && newFilterData !== undefined) {
                newFilterData = newFilterData.filter(
                    (item) => item.bookingStatus === filterBy.status,
                );
            }
            setFilterData(newFilterData);
        };
        handleFilter();
    }, [filterBy, data]);

    return (
        <div className="w-full h-full flex-col flex gap-2">
            <BookingsDialog selected={currentSelected} refetch={refetch} />
            <div className="w-full h-10 items-center justify-between flex">
                <h2 className="text-lg max-sm:text-sm font-semibold">
                    Bookings
                </h2>
                <div className="flex flex-row gap-2">
                    <select
                        defaultValue={currentUser.id || "All"}
                        value={filterBy.userId}
                        onChange={(e) =>
                            setFilterBy((prev) => ({
                                ...prev,
                                userId: e.target.value,
                            }))
                        }
                        className={`select ${currentUser.role === UserRole.USER ? "hidden" : ""}`}
                    >
                        <option disabled={true}>Pick a color</option>
                        <option value={"All"}>All</option>
                        {AllUsers &&
                            AllUsers.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                    </select>
                    <select
                        defaultValue="Filter Status"
                        onChange={(e) =>
                            setFilterBy((prev) => ({
                                ...prev,
                                status:
                                    e.target.value == "All"
                                        ? "All"
                                        : (e.target.value as BookingStatus),
                            }))
                        }
                        className="select"
                    >
                        <option disabled={true}>Pick a color</option>
                        <option>All</option>
                        <option value={BookingStatus.CONFIRMED}>
                            Confirmed
                        </option>
                        <option value={BookingStatus.COMPLETED}>
                            Completed
                        </option>
                        <option value={BookingStatus.CANCELLED}>
                            Cancelled
                        </option>
                    </select>
                </div>
            </div>

            <BookingsTable
                data={filterData}
                currentSelected={setCurrentSelected}
            />
            <button
                className="btn btn-primary rounded-full size-10 absolute p-0 bottom-5 right-5"
                onClick={() =>
                    (
                        document.getElementById(
                            "create_booking",
                        ) as HTMLDialogElement
                    )?.showModal()
                }
            >
                <Plus className="absolute" />
            </button>
        </div>
    );
};
export default BookingsPage;
