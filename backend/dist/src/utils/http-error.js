export class HttpError extends Error {
    statusCode;
    constructor(message, statusCode = 500) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export class UnauthorizedError extends HttpError {
    constructor(message) {
        super(message, 401);
    }
}
export class ForbiddenError extends HttpError {
    constructor(message) {
        super(message, 403);
    }
}
export class NotFoundError extends HttpError {
    constructor(message) {
        super(message, 404);
    }
}
export class BadRequestError extends HttpError {
    constructor(message) {
        super(message, 400);
    }
}
export class InternalServerError extends HttpError {
    constructor(message) {
        super(message, 500);
    }
}
//# sourceMappingURL=http-error.js.map