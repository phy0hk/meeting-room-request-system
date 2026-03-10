import type { RequestHandler } from "express";

const cors: RequestHandler = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:5173");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization",
    );

    if (req.method === "OPTIONS") {
        res.sendStatus(200);
        return;
    }

    next();
};
export default cors;
