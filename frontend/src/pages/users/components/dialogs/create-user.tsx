import type { SubmitEvent } from "react";

const CreateUserDialog = ({
    handleOnSubmit,
}: {
    handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}) => {
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
