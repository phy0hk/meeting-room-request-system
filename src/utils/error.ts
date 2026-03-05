export class HttpError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message: string) {
        super(message);
        this.statusCode = 401;
    }
}

export class ForbiddenError extends HttpError {
    constructor(message: string) {
        super(message);
        this.statusCode = 401;
    }
}

export class BadRequestError extends HttpError {
    constructor(message: string) {
        super(message);
        this.statusCode = 400;
    }
}
