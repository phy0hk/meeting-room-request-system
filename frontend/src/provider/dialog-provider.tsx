import DialogContext from "@/context/dialog-context";
import { useState, type ReactNode } from "react";

const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const openErrorDialog = (message: string) => {
        setErrorMsg(message);
        (
            document.getElementById("error-modal") as HTMLDialogElement
        )?.showModal();
    };
    return (
        <DialogContext.Provider value={{ openErrorDialog, errorMsg }}>
            {children}
        </DialogContext.Provider>
    );
};
export default DialogProvider;
