import { UserRole, type Route } from "@/types/utils";
import { Home, Users } from "lucide-react";

const PageRoutes: Route[] = [
    { id: 0, url: "/", icon: Home, name: "Bookings", role: UserRole.USER },
    { id: 1, url: "/users", icon: Users, name: "Users", role: UserRole.ADMIN },
];

export const getRoutes = () => PageRoutes;
