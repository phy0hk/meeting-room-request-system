import type { LoginBody } from "@/types/auth.js";

const AuthService = { typeCheck: { LoginBodyCheck } };

function LoginBodyCheck(body: any): LoginBody | null {
    if (!body.username) return null;
    if (!body.password) return null;
    return body as LoginBody;
}

export default AuthService;
