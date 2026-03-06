import ThemeContext from "@/context/theme-context";
import { getLocalTheme, setLocalTheme } from "@/utils/theme";
import { useEffect, useState, type ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">(getLocalTheme);
    const switchTheme = () => {
        const newThemeMode = theme == "light" ? "dark" : "light";
        setTheme(newThemeMode);
        setLocalTheme(newThemeMode);
    };
    const updateTheme = () => {
        const newTheme = theme == "light" ? "corporate" : "night";
        document.body.setAttribute("data-theme", newTheme);
    };
    useEffect(() => {
        updateTheme();
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
