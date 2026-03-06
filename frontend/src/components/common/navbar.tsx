import { NavLink } from "react-router";
import ThemeSwap from "./theme-swap";

const Navbar = ({ isInLogin = false }: { isInLogin?: boolean }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
                <label
                    className={`btn btn-square btn-ghost drawer-button ${isInLogin ? "hidden" : ""}`}
                    htmlFor="my-drawer-4"
                    aria-label="open sidebar"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        {" "}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>{" "}
                    </svg>
                </label>
            </div>
            <div className="flex-1 flex justify-between items-center">
                <NavLink
                    to={"/"}
                    className="btn btn-ghost text-lg max-sm:text-sm "
                >
                    Meeting Room Booking System
                </NavLink>
                <ThemeSwap />
            </div>
        </div>
    );
};
export default Navbar;
