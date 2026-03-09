export declare class HttpError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class UnauthorizedError extends HttpError {
    constructor(message: string);
}
export declare class ForbiddenError extends HttpError {
    constructor(message: string);
}
export declare class NotFoundError extends HttpError {
    constructor(message: string);
}
export declare class BadRequestError extends HttpError {
    constructor(message: string);
}
export declare class InternalServerError extends HttpError {
    constructor(message: string);
}
//# sourceMappingURL=http-error.d.ts.map