export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
    readonly OWNER: "OWNER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const BookingStatus: {
    readonly CONFIRMED: "CONFIRMED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
//# sourceMappingURL=enums.d.ts.map