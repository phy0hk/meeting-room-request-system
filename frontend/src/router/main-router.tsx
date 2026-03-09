import MainLayout from "@/components/layout/main-layout";
import AccountPage from "@/pages/account/page";
import BookingsPage from "@/pages/bookings/page";
import LoginPage from "@/pages/login/page";
import RoomPage from "@/pages/rooms/page";
import UserPage from "@/pages/users/page";
import { createBrowserRouter } from "react-router";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <BookingsPage />,
            },
            {
                path: "users",
                element: <UserPage />,
            },
            {
                path: "rooms",
                element: <RoomPage />,
            },
            {
                path: "account",
                element: <AccountPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
export default mainRouter;
