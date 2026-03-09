import CreateUserDialog from "./create-user";
import DeactivateUserDialog from "./deactivate-user";
import type { User } from "@/types/users";
import UpdateUserDialog from "./edit-user";

const UserDialogs = ({
    refetch,
    selectedUser,
}: {
    refetch: () => void;
    selectedUser: User | undefined;
}) => {
    return (
        <>
            <CreateUserDialog refetch={refetch} />
            <DeactivateUserDialog
                refetch={refetch}
                selectedUser={selectedUser}
            />
            <UpdateUserDialog refetch={refetch} selectedUser={selectedUser} />
        </>
    );
};
export default UserDialogs;
