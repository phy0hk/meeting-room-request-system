import { createContext } from "react";
export interface DialogContext {
    openErrorDialog: (message: string) => void;
    errorMsg: string;
}
const DialogContext = createContext<DialogContext>({
    openErrorDialog: () => {},
    errorMsg: "",
});
export default DialogContext;
