import type { AuthenticatedRequest, LoginTokenPayload } from "../types/auth.js";
import type { NextFunction, Response } from "express";
export declare const Authenticate: (req: AuthenticatedRequest) => Promise<LoginTokenPayload>;
export declare const AuthorizeAllUserRoles: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const AuthorizeAdminOnly: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const AuthorizeOwnerOnly: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const AuthorizeAdminAndOwner: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map