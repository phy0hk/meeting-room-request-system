const AuthService = { typeCheck: { LoginBodyCheck } };
function LoginBodyCheck(body) {
    if (!body.username)
        return null;
    if (!body.password)
        return null;
    return body;
}
export default AuthService;
//# sourceMappingURL=auth-service.js.map