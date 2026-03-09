import api from "@/config/default-api";
import { useQuery } from "@tanstack/react-query";
import UserTable from "./components/users-table";
import { Plus } from "lucide-react";
import UserDialogs from "./components/dialogs/dialog";
import { useState } from "react";
import type { User } from "@/types/users";

const LoadUsersList = async () => {
    const { data } = await api.get("/api/users");
    return data.data;
};
const UserPage = () => {
    const { data, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: LoadUsersList,
    });
    const [selectedUser, setSelectedUser] = useState<User>();

    return (
        <div className="w-full h-full flex flex-col">
            <UserDialogs refetch={refetch} selectedUser={selectedUser} />
            <h2 className="w-full h-10 text-lg font-semibold max-sm:text-sm">
                Users
            </h2>
            <UserTable setSelectedUser={setSelectedUser} data={data} />
            <button
                className="rounded-full size-10 btn p-0 absolute bottom-5 right-5 btn-primary"
                data-tip="Create new user"
                onClick={() =>
                    (
                        document.getElementById(
                            "create_user",
                        ) as HTMLDialogElement
                    )?.showModal()
                }
            >
                <Plus className="absolute" />
            </button>
        </div>
    );
};
export default UserPage;
