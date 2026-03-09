import { HttpError } from "../utils/http-error.js";
export const ErrorHandler = (err, req, res, next) => {
    const statusCode = err instanceof HttpError ? err.statusCode : 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        stack: process.env.NODE_ENV === "dev" ? err.stack : undefined,
    });
};
//# sourceMappingURL=error-handler.js.map