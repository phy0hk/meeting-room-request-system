export const getLocalTheme = (): "light" | "dark" => {
    const theme = localStorage.getItem("theme");
    return theme == "dark" ? "dark" : "light";
};
export const setLocalTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
};
