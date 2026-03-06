import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./provider/theme-provider.tsx";
import QueryProvier from "./provider/queryprovier.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <QueryProvier>
                <App />
            </QueryProvier>
        </ThemeProvider>
    </StrictMode>,
);
