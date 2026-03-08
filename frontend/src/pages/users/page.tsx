import api from "@/config/default-api";
import { useQuery } from "@tanstack/react-query";
import UserTable from "./components/users-table";
import { Plus } from "lucide-react";
import UserDialogs from "./components/dialogs/dialog";
import { useState, type SubmitEvent } from "react";
import useDialog from "@/hooks/useDialog";
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
    const { openErrorDialog } = useDialog();
    const [selectedUser, setSelectedUser] = useState<User>();
    const createUser = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const username = formData.get("username");
        const password = formData.get("password");
        const role = formData.get("role");
        api.post("/api/users", { name, username, role, password })
            .then(() => refetch())
            .catch((err) => {
                openErrorDialog(err.response.data.message);
            });
    };
    return (
        <div className="w-full h-full flex flex-col">
            <UserDialogs
                createUser={createUser}
                refetch={refetch}
                selectedUser={selectedUser}
            />
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
