import ThemeContext from "@/context/theme-context";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext);
export default useTheme;
