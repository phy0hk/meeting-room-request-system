import api from "@/config/default-api";
import useDialog from "@/hooks/useDialog";
import type { User } from "@/types/users";

const DeactivateUserDialog = ({
    refetch,
    selectedUser,
}: {
    refetch: () => void;
    selectedUser: User | undefined;
}) => {
    const { openErrorDialog } = useDialog();
    return (
        <dialog id="deactivate_user_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Log Out</h3>
                <p className="py-4">
                    Are you sure you want to diactivate this account?
                </p>
                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={() => {
                            api.delete("/api/users?userId=" + selectedUser?.id)
                                .then(() => refetch())
                                .catch((err) => {
                                    openErrorDialog(err.response.data.message);

                                    (
                                        document.getElementById(
                                            "deactivate_user_modal",
                                        ) as HTMLDialogElement
                                    )?.close();
                                });
                        }}
                    >
                        Confirm
                    </button>
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default DeactivateUserDialog;
