import api from "@/config/default-api";
import type { User } from "@/types/users";
import { useQuery } from "@tanstack/react-query";
import { useEffect, type Dispatch, type SetStateAction } from "react";

async function getUsersList() {
    const { data } = await api.get("/api/users/available");
    return data.data;
}
const UsernameInput = ({
    selectedUser,
    setSelectedUser,
}: {
    selectedUser: User | undefined;
    setSelectedUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
    const { data } = useQuery<User[]>({
        queryKey: ["user"],
        queryFn: () => getUsersList(),
    });
    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);
    return (
        <div className="w-full h-fit z-100">
            <label className="input validator w-full">
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </g>
                </svg>
                <div className="dropdown w-full">
                    <div tabIndex={0} role="button" className="m-1 w-full">
                        {selectedUser !== undefined
                            ? selectedUser?.name
                            : "Select User"}
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
                    >
                        <li className="h-0 w-0 overflow-hidden">
                            <button tabIndex={-1} type="button"></button>
                        </li>
                        {data &&
                            data.length > 0 &&
                            data.map((user) => (
                                <li key={user.id}>
                                    <button
                                        role="button"
                                        type="button"
                                        onClick={() => setSelectedUser(user)}
                                    >
                                        {user.name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </label>
        </div>
    );
};

export default UsernameInput;
