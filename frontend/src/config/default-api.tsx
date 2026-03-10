import { getToken } from "@/utils/current-user";
import axios from "axios";
const api = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
        Authorization: getToken() || "",
    },
});
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status == 401) {
            const pathname = window.location.pathname;
            if (pathname !== "/login") {
                console.warn("Session expired. Redirecting to login...");
                window.location.pathname = "/login";
            }
        }
        return Promise.reject(error);
    },
);
export default api;
