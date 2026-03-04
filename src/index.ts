import express from "express";
import "dotenv/config";
import ApiRouter from "@/router/api-router.js";

const server = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.use(express.json());
server.use("/api", ApiRouter);

server.listen(Number(PORT), HOSTNAME, () => {
    console.log(`Server is listen at ${HOSTNAME}:${PORT}`);
});
