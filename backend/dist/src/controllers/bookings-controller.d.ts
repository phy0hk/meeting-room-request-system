import type { AuthenticatedRequest } from "../types/auth.js";
import type { NextFunction, Request, Response } from "express";
export declare const GetBookings: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare function CreateBooking(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
export declare function CancelBooking(req: AuthenticatedRequest, res: Response): Promise<void>;
export declare function UpdateBooking(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=bookings-controller.d.ts.map