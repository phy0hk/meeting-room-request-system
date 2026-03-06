import Navbar from "../common/navbar";
import NavButton from "@/components/common/nav-button";
import type { ReactNode } from "react";
import { getRoutes } from "@/utils/page-routes";
const Drawer = ({ children }: { children: ReactNode }) => {
    const Routes = getRoutes();
    return (
        <div className="drawer lg:drawer-open">
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
