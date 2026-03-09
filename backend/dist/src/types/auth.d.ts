import type { Request } from "express";
import type { tblUsers } from "../../generated/prisma/client.js";
import type { Role } from "../../generated/prisma/enums.js";
export interface LoginBody {
    username: string;
    password: string;
}
export interface LoginTokenPayload {
    id: string;
    username: string;
    name: string;
    role: Role;
}
export interface AuthenticatedRequest extends Request {
    user?: Omit<tblUsers, "password">;
}
//# sourceMappingURL=auth.d.ts.map