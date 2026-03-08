import type { User } from "@/types/users";
import { Edit, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

const UserTable = ({
    data,
    setSelectedUser,
}: {
    data: any[] | undefined;
    setSelectedUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Bookings Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.length > 0 &&
                        data.map((user) => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>{user.bookings.length}</td>
                                <td className="flex gap-2">
                                    <button
                                        className="btn hover:btn-primary p-1.5 size-8 relative"
                                        onClick={() => {
                                            setSelectedUser(user);
                                            (
                                                document.getElementById(
                                                    "edit_user",
                                                ) as HTMLDialogElement
                                            )?.showModal();
                                        }}
                                    >
                                        <Edit className="absolute size-4" />
                                    </button>
                                    <button
                                        className="btn hover:btn-error p-1.5 size-8 relative"
                                        onClick={() => {
                                            setSelectedUser(user);
                                            (
                                                document.getElementById(
                                                    "deactivate_user_modal",
                                                ) as HTMLDialogElement
                                            )?.showModal();
                                        }}
                                    >
                                        <X className="absolute size-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
export default UserTable;
