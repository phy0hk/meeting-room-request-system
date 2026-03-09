import type { Room } from "@/types/room";

const RoomsTable = ({ data }: { data: Room[] | undefined }) => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((room) => (
                            <tr>
                                <th>{room.id}</th>
                                <td>{room.name}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
export default RoomsTable;
