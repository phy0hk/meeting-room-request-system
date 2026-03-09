import { UserRole, type Route } from "@/types/utils";
import { DoorClosed, Home, User, Users } from "lucide-react";

const PageRoutes: Route[] = [
    { id: 0, url: "/", icon: Home, name: "Bookings", role: UserRole.USER },
    { id: 1, url: "/users", icon: Users, name: "Users", role: UserRole.ADMIN },
    {
        id: 2,
        url: "/rooms",
        icon: DoorClosed,
        name: "Rooms",
        role: UserRole.ADMIN,
    },
    {
        id: 3,
        url: "/account",
        icon: User,
        name: "Account",
        role: UserRole.USER,
    },
];

export const getRoutes = () => PageRoutes;
