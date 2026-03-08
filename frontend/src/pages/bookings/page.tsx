import api from "@/config/default-api";
import BookingsTable from "./components/bookings-table";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BookingsDialog from "./components/dialogs/dialogs";
import { Plus } from "lucide-react";
import type { User } from "@/types/users";
import { BookingStatus } from "@/types/bookings";
import { getCurrentUser } from "@/utils/current-user";
const LoadBookingsData = async () => {
    const { data } = await api.get("/api/bookings");
    return data.data;
};
const BookingsPage = () => {
    const { data, refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: LoadBookingsData,
    });
    const currentUser = getCurrentUser();
    const [filterData, setFilterData] = useState<any>(data);
    const [filterBy, setFilterBy] = useState<{
        user: User | undefined;
        status: BookingStatus | undefined;
    }>();
    const [currentSelected, setCurrentSelected] = useState<number>(0);
    const handleOnCancel = () => {
        api.delete("/api/bookings?bookingId=" + currentSelected).then(() =>
            refetch(),
        );
    };
    useEffect(() => {
        const handleFilter = () => {
            setFilterData(data);
            if (!filterBy) return;
            if (filterBy.user !== undefined) {
                setFilterData((prev: any[]) =>
                    prev.filter((item) => item.user.id == filterBy.user?.id),
                );
            }
            if (filterBy.status !== undefined) {
                setFilterData((prev: any[]) =>
                    prev.filter(
                        (item) => item.bookingStatus == filterBy.status,
                    ),
                );
            }
        };
        console.log(filterBy);
        handleFilter();
    }, [filterBy, data]);

    return (
        <div className="w-full h-full flex-col flex">
            <BookingsDialog cancelBooking={handleOnCancel} refetch={refetch} />
            <div className="w-full h-10 items-center justify-between flex">
                <h2 className="text-lg max-sm:text-sm font-semibold">
                    Bookings
                </h2>
                <div className="flex flex-row">
                    <select
                        defaultValue="Filter Status"
                        onChange={(e) =>
                            setFilterBy((prev) => ({
                                user: prev?.user,
                                status:
                                    e.target.value == "All"
                                        ? undefined
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
