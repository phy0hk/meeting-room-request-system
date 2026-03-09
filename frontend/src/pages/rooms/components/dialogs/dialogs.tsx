import CreateRoomDialog from "./create-room";

const RoomDialog = ({ refetch }: { refetch: () => void }) => {
    return (
        <>
            <CreateRoomDialog refetch={refetch} />
        </>
    );
};
export default RoomDialog;
