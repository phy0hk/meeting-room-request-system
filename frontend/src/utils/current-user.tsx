import { UserStatus, type User } from "@/types/users";
import { UserRole } from "@/types/utils";

export const getCurrentUser = () => {
    const userString = localStorage.getItem("userInfo");
    if (userString) {
        const user = JSON.parse(userString);
        return user as User;
    }
    return {
        id: 0,
        name: "",
        username: "",
        role: UserRole.USER,
        status: UserStatus.ACTIVE,
    };
};

export const setCurrentUser = (user: User) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
};
