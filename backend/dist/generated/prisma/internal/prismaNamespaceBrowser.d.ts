import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly tblUsers: "tblUsers";
    readonly tblBookings: "tblBookings";
    readonly tblRooms: "tblRooms";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TblUsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly username: "username";
    readonly role: "role";
    readonly password: "password";
    readonly status: "status";
};
export type TblUsersScalarFieldEnum = (typeof TblUsersScalarFieldEnum)[keyof typeof TblUsersScalarFieldEnum];
export declare const TblBookingsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly description: "description";
    readonly roomId: "roomId";
    readonly attendeeCount: "attendeeCount";
    readonly bookingStatus: "bookingStatus";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly createdAt: "createdAt";
};
export type TblBookingsScalarFieldEnum = (typeof TblBookingsScalarFieldEnum)[keyof typeof TblBookingsScalarFieldEnum];
export declare const TblRoomsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type TblRoomsScalarFieldEnum = (typeof TblRoomsScalarFieldEnum)[keyof typeof TblRoomsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map