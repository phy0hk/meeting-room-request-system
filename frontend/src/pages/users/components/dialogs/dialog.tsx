import type { SubmitEvent } from "react";
import CreateUserDialog from "./create-user";
import DeactivateUserDialog from "./deactivate-user";
import type { User } from "@/types/users";
import UpdateUserDialog from "./edit-user";

const UserDialogs = ({
    createUser,
    refetch,
    selectedUser,
}: {
    createUser: (e: SubmitEvent<HTMLFormElement>) => void;
    refetch: () => void;
    selectedUser: User | undefined;
}) => {
    return (
        <>
            <CreateUserDialog handleOnSubmit={createUser} />
            <DeactivateUserDialog
                refetch={refetch}
                selectedUser={selectedUser}
            />
            <UpdateUserDialog refetch={refetch} selectedUser={selectedUser} />
        </>
    );
};
export default UserDialogs;
