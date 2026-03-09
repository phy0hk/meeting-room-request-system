import { getCurrentUser, setCurrentUser } from "@/utils/current-user";
import { type SubmitEvent } from "react";
import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";

const AccountPage = () => {
    const currentUser = getCurrentUser();
    const { openErrorDialog, openSuccessDialog } = useDialog();
    const handleUpdate = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString();
        const password = formData.get("password");

        api.patch("/api/users", {
            username: currentUser.username,
            name,
            password,
        })
            .then(() => {
                setCurrentUser({
                    ...currentUser,
                    name: name ?? currentUser.name,
                });
                openSuccessDialog("Account updated successfully");
            })
            .catch((err) => openErrorDialog(err.response.data.message));
        (
            document.getElementById("confirm_update") as HTMLDialogElement
        )?.close();
    };
    return (
        <div className="min-h-screen p-4 md:p-8">
            {/* Main Content */}
            <div className="card bg-base-100 h-full shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Edit Profile</h2>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                disabled
                                value={currentUser.username}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter new name"
                                defaultValue={currentUser.name}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter new password"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <input
                                type="text"
                                disabled
                                value={currentUser.role}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="card-actions justify-end mt-6">
                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
