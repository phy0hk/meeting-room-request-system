import { HttpError } from "@/utils/http-error.js";
import type { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const statusCode: number = err instanceof HttpError ? err.statusCode : 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        stack: process.env.NODE_ENV === "dev" ? err.stack : undefined,
    });
};
