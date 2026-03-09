import type { tblUsers } from "../../generated/prisma/client.js";
import type { Role, UserStatus } from "../../generated/prisma/enums.js";
export interface CreateUserBody {
    name: string;
    username: string;
    password: string;
    role: Role;
    status: UserStatus;
}
export interface UpdateUserBody {
    name?: string;
    role?: Role;
    password?: string;
}
export type User = Omit<tblUsers, "password">;
//# sourceMappingURL=users.d.ts.map