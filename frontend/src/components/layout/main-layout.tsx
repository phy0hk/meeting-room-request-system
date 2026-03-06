import { Outlet } from "react-router";
import Drawer from "../common/drawer";

const MainLayout = () => {
    return (
        <>
            <Drawer>
                <Outlet />
            </Drawer>
        </>
    );
};
export default MainLayout;
