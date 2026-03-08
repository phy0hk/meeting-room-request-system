import Navbar from "@/components/common/navbar";
import UsernameInput from "./components/input";
import PasswordInput from "./components/password";
import { useRef, useState, type SubmitEvent } from "react";
import api from "@/config/default-api";
import type { User } from "@/types/users";
import useDialog from "@/hooks/useDialog";
import Dialog from "@/components/dialog/dialog";
import { useNavigate } from "react-router";
import { setCurrentUser } from "@/utils/current-user";
const LoginPage = () => {
    const [selectedUser, setSelectedUser] = useState<User>();
    const { openErrorDialog } = useDialog();
    const navigate = useNavigate();
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post("/api/auth", {
            username: selectedUser?.username,
            password: passwordRef.current?.value,
        })
            .then((res) => {
                if (res.status == 200) navigate("/");
                setCurrentUser(res.data.data);
            })
            .catch((error) => openErrorDialog(error.response.data.message));
    };

    return (
        <div className="w-screen h-dvh overflow-hidden bg-base-100">
            <Dialog />
            <Navbar isInLogin={true} />
            <div className="w-full h-full flex items-center justify-center">
                <form
                    className="bg-base-100 w-96 shadow p-6 flex flex-col items-center justify-center gap-4"
                    onSubmit={handleSubmit}
                >
                    <UsernameInput
                        selectedUser={selectedUser}
                        setSelectedUser={setSelectedUser}
                    />
                    <PasswordInput ref={passwordRef} />
                    <button
                        type="submit"
                        className="btn w-full hover:btn-primary"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
