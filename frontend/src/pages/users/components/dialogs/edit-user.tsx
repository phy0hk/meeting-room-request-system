import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import type { User } from "@/types/users";
import { UserRole } from "@/types/utils";
import { useEffect, useState, type SubmitEvent } from "react";

const UpdateUserDialog = ({
    refetch,
    selectedUser,
}: {
    refetch: () => void;
    selectedUser: User | undefined;
}) => {
    const { openErrorDialog } = useDialog();
    const [updateUser, setUpdateUser] = useState(
        selectedUser || { name: "", username: "", role: UserRole.USER },
    );
    const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const password = formData.get("password");
        const role = formData.get("role");
        api.patch("/api/users", {
            username: selectedUser?.username,
            name,
            password,
            role,
        })
            .then(() => {
                refetch();
                (
                    document.getElementById("edit_user") as HTMLDialogElement
                ).close();
            })
            .catch((err) => openErrorDialog(err.response.data.message));
    };
    useEffect(() => {
        const handleUpdate = () => {
            if (selectedUser) setUpdateUser(selectedUser);
        };
        handleUpdate();
    }, [selectedUser]);
    return (
        <dialog id="edit_user" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create New User</h3>
                <form
                    className="py-4 w-full flex flex-col gap-2"
                    onSubmit={handleOnSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        defaultValue={selectedUser?.name}
                        value={updateUser?.name}
                        onChange={(e) =>
                            setUpdateUser((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                        placeholder="Name (Optional)"
                        className="input w-full"
                    />

                    <input
                        type="password"
                        name="password"
                        min={4}
                        placeholder="New Password (Optional)"
                        className="input w-full"
                    />
                    <select
                        name="role"
                        className="select w-full"
                        value={updateUser.role}
                        onChange={(e) =>
                            setUpdateUser((prev) => ({
                                ...prev,
                                role: e.target.value as UserRole,
                            }))
                        }
                        defaultValue={selectedUser?.role}
                    >
                        <option disabled={true}>
                            Pick user role (Optional)
                        </option>
                        <option>USER</option>
                        <option>OWNER</option>
                        <option>ADMIN</option>
                    </select>
                    <button className="btn hover:btn-primary">Update</button>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn hover:btn-error">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default UpdateUserDialog;
