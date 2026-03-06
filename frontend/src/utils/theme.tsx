export const getLocalTheme = (): "light" | "dark" => {
    const theme = localStorage.getItem("theme");
    return theme == "light" ? "light" : "dark";
};
export const setLocalTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
};
