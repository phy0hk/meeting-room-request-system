import api from "@/config/default-api";
import { useNavigate } from "react-router";

const LogoutModal = () => {
    const navigate = useNavigate();
    return (
        <dialog id="logout_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Log Out</h3>
                <p className="py-4">Are you sure you want to logout?</p>
                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={() => {
                            api.get("/api/auth/logout").then(() => {
                                navigate("/login");
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
export default LogoutModal;
