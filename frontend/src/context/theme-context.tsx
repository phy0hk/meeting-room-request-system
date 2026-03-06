import { createContext } from "react";
export interface ThemeContext {
    theme: "light" | "dark";
    switchTheme: () => void;
}
const ThemeContext = createContext<ThemeContext>({
    theme: "light",
    switchTheme: () => {},
});
export default ThemeContext;
