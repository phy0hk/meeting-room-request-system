import MainLayout from "@/components/layout/main-layout";
import BookingsPage from "@/pages/bookings/page";
import LoginPage from "@/pages/login/page";
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
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
export default mainRouter;
