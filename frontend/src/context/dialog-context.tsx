import { createContext } from "react";
export interface DialogContext {
    openErrorDialog: (message: string) => void;
    openSuccessDialog: (message: string) => void;
    errorMsg: string;
    successMsg: string;
}
const DialogContext = createContext<DialogContext>({
    openErrorDialog: () => {},
    openSuccessDialog: () => {},
    errorMsg: "",
    successMsg: "",
});
export default DialogContext;
