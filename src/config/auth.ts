import crypto from "crypto";
export const SECRET_KEY =
    process.env.SECRET || crypto.randomBytes(64).toString("hex");
