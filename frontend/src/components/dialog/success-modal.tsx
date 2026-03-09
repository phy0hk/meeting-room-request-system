import useDialog from "@/hooks/useDialog";

const SuccessModal = () => {
    const { successMsg } = useDialog();
    return (
        <dialog id="success-modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Success</h3>
                <p className="py-4">{successMsg}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};
export default SuccessModal;
