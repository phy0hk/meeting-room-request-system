import MainLayout from "@/components/layout/main-layout";
import BookingsPage from "@/pages/bookings/page";
import LoginPage from "@/pages/login/page";
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
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
export default mainRouter;
