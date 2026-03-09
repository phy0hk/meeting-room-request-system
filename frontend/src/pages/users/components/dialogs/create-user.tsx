import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import type { SubmitEvent } from "react";

const CreateUserDialog = ({ refetch }: { refetch: () => void }) => {
    const { openErrorDialog } = useDialog();
    const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const username = formData.get("username");
        const password = formData.get("password");
        const role = formData.get("role");
        api.post("/api/users", { name, username, role, password })
            .then(() => {
                refetch();
                (
                    document.getElementById("create_user") as HTMLDialogElement
                )?.close();
                e.currentTarget.reset();
            })
            .catch((err) => {
                openErrorDialog(err.response?.data.message);
            });
    };
    return (
        <dialog id="create_user" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create New User</h3>
                <form
                    className="py-4 w-full flex flex-col gap-2"
                    onSubmit={handleOnSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="input w-full"
                    />
                    <input
                        required
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="input w-full"
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        min={4}
                        placeholder="Password"
                        className="input w-full"
                    />
                    <select
                        name="role"
                        defaultValue="USER"
                        className="select w-full"
                    >
                        <option key={0} disabled={true}>
                            Pick user role
                        </option>
                        <option key={1}>USER</option>
                        <option key={2}>OWNER</option>
                        <option key={3}>ADMIN</option>
                    </select>
                    <button className="btn hover:btn-primary">Create</button>
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
export default CreateUserDialog;
