"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var http_error_js_1 = require("@/utils/http-error.js");
var ErrorHandler = function (err, req, res, next) {
    var statusCode = err instanceof http_error_js_1.HttpError ? err.statusCode : 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        stack: process.env.NODE_ENV === "dev" ? err.stack : undefined,
    });
};
exports.ErrorHandler = ErrorHandler;
