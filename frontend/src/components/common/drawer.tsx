import Navbar from "../common/navbar";
import NavButton from "@/components/common/nav-button";
import { type ReactNode } from "react";
import { getRoutes } from "@/utils/page-routes";
import { getCurrentUser } from "@/utils/current-user";
import { UserRole } from "@/types/utils";
const Drawer = ({ children }: { children: ReactNode }) => {
    const currentUser = getCurrentUser();
    const Routes = getRoutes().filter((route) => {
        if (currentUser.role == route.role) return route;
        else if (
            currentUser.role == UserRole.ADMIN &&
            route.role == UserRole.OWNER
        )
            return route;
        else if (route.role == UserRole.USER) return route;
    });
    return (
        <div className="drawer lg:drawer-open h-full">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <div className="p-4 overflow-auto">{children}</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {Routes.map((item) => (
                            <NavButton
                                key={item.id}
                                url={item.url}
                                icon={item.icon}
                                name={item.name}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Drawer;
