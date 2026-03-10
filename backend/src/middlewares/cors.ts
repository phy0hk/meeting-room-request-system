import type { RequestHandler } from "express";

const cors: RequestHandler = (req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://meeting-room-request-system.onrender.com",
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization",
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
        res.sendStatus(200);
        return;
    }

    next();
};
export default cors;
