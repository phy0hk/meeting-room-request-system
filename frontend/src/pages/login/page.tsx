import Navbar from "@/components/common/navbar";
import UsernameInput from "./component/input";
import PasswordInput from "./component/password";

const LoginPage = () => {
    return (
        <div className="w-screen h-dvh overflow-hidden">
            <Navbar isInLogin={true} />
            <div className="w-full h-full flex items-center justify-center">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <UsernameInput />
                    <PasswordInput />
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
