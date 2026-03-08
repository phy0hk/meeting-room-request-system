import type { ElementType } from "react";

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    OWNER = "OWNER",
}

export interface Route {
    id: number;
    url: string;
    icon: ElementType;
    name: string;
    role: UserRole;
}
