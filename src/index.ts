import express from "express";
import "dotenv/config";
import ApiRouter from "@/router/api-router.js";
import { ErrorHandler } from "./middlewares/error-handler.js";
import { Initiallize } from "./utils/initializer.js";
import cookieParser from "cookie-parser";

const server = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

Initiallize();
server.use(express.json());
server.use(cookieParser());
server.use("/api", ApiRouter);
server.use(ErrorHandler);

server.listen(Number(PORT), HOSTNAME, () => {
    console.log(`Server is listen at ${HOSTNAME}:${PORT}`);
});
