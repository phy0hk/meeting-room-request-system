import type { LoginBody } from "../types/auth.js";
declare const AuthService: {
    typeCheck: {
        LoginBodyCheck: typeof LoginBodyCheck;
    };
};
declare function LoginBodyCheck(body: any): LoginBody | null;
export default AuthService;
//# sourceMappingURL=auth-service.d.ts.map