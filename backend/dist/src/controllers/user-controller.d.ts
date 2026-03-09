import type { AuthenticatedRequest } from "../types/auth.js";
import type { Request, Response } from "express";
export declare const CreateUser: (req: Request, res: Response) => Promise<void>;
export declare const GetAllUsers: (_: Request, res: Response) => Promise<void>;
export declare const GetAvailableUsers: (_: Request, res: Response) => Promise<void>;
export declare const DeleteUser: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const UpdateUser: (req: AuthenticatedRequest, res: Response) => Promise<void>;
//# sourceMappingURL=user-controller.d.ts.map