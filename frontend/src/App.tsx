import { RouterProvider } from "react-router/dom";
import mainRouter from "@/router/main-router";

function App() {
    return <RouterProvider router={mainRouter} />;
}

export default App;
