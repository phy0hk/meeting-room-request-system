import type { UserRole } from "./utils";

export interface User {
    id: number;
    name: string;
    username: string;
    role: UserRole;
    status: UserStatus;
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}
