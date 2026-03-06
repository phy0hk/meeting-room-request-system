import { type ElementType } from "react";
import { NavLink } from "react-router";
const NavButton = (props: { url: string; icon: ElementType; name: string }) => {
    return (
        <li>
            <NavLink
                to={props.url}
                data-tip="Bookings"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            >
                <props.icon className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">{props.name}</span>
            </NavLink>
        </li>
    );
};
export default NavButton;
