import { Outlet } from "react-router";
import Drawer from "../common/drawer";
import Dialog from "../dialog/dialog";

const MainLayout = () => {
    return (
        <div className="bg-base-100 h-dvh">
            <Drawer>
                <Dialog />
                <Outlet />
            </Drawer>
        </div>
    );
};
export default MainLayout;
