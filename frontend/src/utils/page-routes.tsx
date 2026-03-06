import { UserRole, type Route } from "@/types/utils";
import { Home } from "lucide-react";

const PageRoutes: Route[] = [
    { url: "/", icon: Home, name: "Home", role: UserRole.USER },
];

export const getRoutes = () => PageRoutes;
