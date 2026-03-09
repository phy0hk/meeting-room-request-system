import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model tblBookings
 *
 */
export type tblBookingsModel = runtime.Types.Result.DefaultSelection<Prisma.$tblBookingsPayload>;
export type AggregateTblBookings = {
    _count: TblBookingsCountAggregateOutputType | null;
    _avg: TblBookingsAvgAggregateOutputType | null;
    _sum: TblBookingsSumAggregateOutputType | null;
    _min: TblBookingsMinAggregateOutputType | null;
    _max: TblBookingsMaxAggregateOutputType | null;
};
export type TblBookingsAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    roomId: number | null;
    attendeeCount: number | null;
};
export type TblBookingsSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    roomId: number | null;
    attendeeCount: number | null;
};
export type TblBookingsMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    description: string | null;
    roomId: number | null;
    attendeeCount: number | null;
    bookingStatus: $Enums.BookingStatus | null;
    startTime: Date | null;
    endTime: Date | null;
    createdAt: Date | null;
};
export type TblBookingsMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    description: string | null;
    roomId: number | null;
    attendeeCount: number | null;
    bookingStatus: $Enums.BookingStatus | null;
    startTime: Date | null;
    endTime: Date | null;
    createdAt: Date | null;
};
export type TblBookingsCountAggregateOutputType = {
    id: number;
    userId: number;
    description: number;
    roomId: number;
    attendeeCount: number;
    bookingStatus: number;
    startTime: number;
    endTime: number;
    createdAt: number;
    _all: number;
};
export type TblBookingsAvgAggregateInputType = {
    id?: true;
    userId?: true;
    roomId?: true;
    attendeeCount?: true;
};
export type TblBookingsSumAggregateInputType = {
    id?: true;
    userId?: true;
    roomId?: true;
    attendeeCount?: true;
};
export type TblBookingsMinAggregateInputType = {
    id?: true;
    userId?: true;
    description?: true;
    roomId?: true;
    attendeeCount?: true;
    bookingStatus?: true;
    startTime?: true;
    endTime?: true;
    createdAt?: true;
};
export type TblBookingsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    description?: true;
    roomId?: true;
    attendeeCount?: true;
    bookingStatus?: true;
    startTime?: true;
    endTime?: true;
    createdAt?: true;
};
export type TblBookingsCountAggregateInputType = {
    id?: true;
    userId?: true;
    description?: true;
    roomId?: true;
    attendeeCount?: true;
    bookingStatus?: true;
    startTime?: true;
    endTime?: true;
    createdAt?: true;
    _all?: true;
};
export type TblBookingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tblBookings to aggregate.
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblBookings to fetch.
     */
    orderBy?: Prisma.tblBookingsOrderByWithRelationInput | Prisma.tblBookingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tblBookingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tblBookings
    **/
    _count?: true | TblBookingsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TblBookingsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TblBookingsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TblBookingsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TblBookingsMaxAggregateInputType;
};
export type GetTblBookingsAggregateType<T extends TblBookingsAggregateArgs> = {
    [P in keyof T & keyof AggregateTblBookings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTblBookings[P]> : Prisma.GetScalarType<T[P], AggregateTblBookings[P]>;
};
export type tblBookingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tblBookingsWhereInput;
    orderBy?: Prisma.tblBookingsOrderByWithAggregationInput | Prisma.tblBookingsOrderByWithAggregationInput[];
    by: Prisma.TblBookingsScalarFieldEnum[] | Prisma.TblBookingsScalarFieldEnum;
    having?: Prisma.tblBookingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TblBookingsCountAggregateInputType | true;
    _avg?: TblBookingsAvgAggregateInputType;
    _sum?: TblBookingsSumAggregateInputType;
    _min?: TblBookingsMinAggregateInputType;
    _max?: TblBookingsMaxAggregateInputType;
};
export type TblBookingsGroupByOutputType = {
    id: number;
    userId: number;
    description: string;
    roomId: number;
    attendeeCount: number;
    bookingStatus: $Enums.BookingStatus;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    _count: TblBookingsCountAggregateOutputType | null;
    _avg: TblBookingsAvgAggregateOutputType | null;
    _sum: TblBookingsSumAggregateOutputType | null;
    _min: TblBookingsMinAggregateOutputType | null;
    _max: TblBookingsMaxAggregateOutputType | null;
};
type GetTblBookingsGroupByPayload<T extends tblBookingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TblBookingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TblBookingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TblBookingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TblBookingsGroupByOutputType[P]>;
}>>;
export type tblBookingsWhereInput = {
    AND?: Prisma.tblBookingsWhereInput | Prisma.tblBookingsWhereInput[];
    OR?: Prisma.tblBookingsWhereInput[];
    NOT?: Prisma.tblBookingsWhereInput | Prisma.tblBookingsWhereInput[];
    id?: Prisma.IntFilter<"tblBookings"> | number;
    userId?: Prisma.IntFilter<"tblBookings"> | number;
    description?: Prisma.StringFilter<"tblBookings"> | string;
    roomId?: Prisma.IntFilter<"tblBookings"> | number;
    attendeeCount?: Prisma.IntFilter<"tblBookings"> | number;
    bookingStatus?: Prisma.EnumBookingStatusFilter<"tblBookings"> | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    user?: Prisma.XOR<Prisma.TblUsersScalarRelationFilter, Prisma.tblUsersWhereInput>;
    room?: Prisma.XOR<Prisma.TblRoomsScalarRelationFilter, Prisma.tblRoomsWhereInput>;
};
export type tblBookingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
    bookingStatus?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.tblUsersOrderByWithRelationInput;
    room?: Prisma.tblRoomsOrderByWithRelationInput;
};
export type tblBookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.tblBookingsWhereInput | Prisma.tblBookingsWhereInput[];
    OR?: Prisma.tblBookingsWhereInput[];
    NOT?: Prisma.tblBookingsWhereInput | Prisma.tblBookingsWhereInput[];
    userId?: Prisma.IntFilter<"tblBookings"> | number;
    description?: Prisma.StringFilter<"tblBookings"> | string;
    roomId?: Prisma.IntFilter<"tblBookings"> | number;
    attendeeCount?: Prisma.IntFilter<"tblBookings"> | number;
    bookingStatus?: Prisma.EnumBookingStatusFilter<"tblBookings"> | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    user?: Prisma.XOR<Prisma.TblUsersScalarRelationFilter, Prisma.tblUsersWhereInput>;
    room?: Prisma.XOR<Prisma.TblRoomsScalarRelationFilter, Prisma.tblRoomsWhereInput>;
}, "id">;
export type tblBookingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
    bookingStatus?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.tblBookingsCountOrderByAggregateInput;
    _avg?: Prisma.tblBookingsAvgOrderByAggregateInput;
    _max?: Prisma.tblBookingsMaxOrderByAggregateInput;
    _min?: Prisma.tblBookingsMinOrderByAggregateInput;
    _sum?: Prisma.tblBookingsSumOrderByAggregateInput;
};
export type tblBookingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.tblBookingsScalarWhereWithAggregatesInput | Prisma.tblBookingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.tblBookingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tblBookingsScalarWhereWithAggregatesInput | Prisma.tblBookingsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"tblBookings"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"tblBookings"> | number;
    description?: Prisma.StringWithAggregatesFilter<"tblBookings"> | string;
    roomId?: Prisma.IntWithAggregatesFilter<"tblBookings"> | number;
    attendeeCount?: Prisma.IntWithAggregatesFilter<"tblBookings"> | number;
    bookingStatus?: Prisma.EnumBookingStatusWithAggregatesFilter<"tblBookings"> | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"tblBookings"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"tblBookings"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"tblBookings"> | Date | string;
};
export type tblBookingsCreateInput = {
    description: string;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
    user: Prisma.tblUsersCreateNestedOneWithoutBookingsInput;
    room: Prisma.tblRoomsCreateNestedOneWithoutBookingsInput;
};
export type tblBookingsUncheckedCreateInput = {
    id?: number;
    userId: number;
    description: string;
    roomId: number;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsUpdateInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.tblUsersUpdateOneRequiredWithoutBookingsNestedInput;
    room?: Prisma.tblRoomsUpdateOneRequiredWithoutBookingsNestedInput;
};
export type tblBookingsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsCreateManyInput = {
    id?: number;
    userId: number;
    description: string;
    roomId: number;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsUpdateManyMutationInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TblBookingsListRelationFilter = {
    every?: Prisma.tblBookingsWhereInput;
    some?: Prisma.tblBookingsWhereInput;
    none?: Prisma.tblBookingsWhereInput;
};
export type tblBookingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tblBookingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
    bookingStatus?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type tblBookingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
};
export type tblBookingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
    bookingStatus?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type tblBookingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
    bookingStatus?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type tblBookingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    attendeeCount?: Prisma.SortOrder;
};
export type tblBookingsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput> | Prisma.tblBookingsCreateWithoutUserInput[] | Prisma.tblBookingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutUserInput | Prisma.tblBookingsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.tblBookingsCreateManyUserInputEnvelope;
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
};
export type tblBookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput> | Prisma.tblBookingsCreateWithoutUserInput[] | Prisma.tblBookingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutUserInput | Prisma.tblBookingsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.tblBookingsCreateManyUserInputEnvelope;
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
};
export type tblBookingsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput> | Prisma.tblBookingsCreateWithoutUserInput[] | Prisma.tblBookingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutUserInput | Prisma.tblBookingsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.tblBookingsUpsertWithWhereUniqueWithoutUserInput | Prisma.tblBookingsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.tblBookingsCreateManyUserInputEnvelope;
    set?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    disconnect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    delete?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    update?: Prisma.tblBookingsUpdateWithWhereUniqueWithoutUserInput | Prisma.tblBookingsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.tblBookingsUpdateManyWithWhereWithoutUserInput | Prisma.tblBookingsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
};
export type tblBookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput> | Prisma.tblBookingsCreateWithoutUserInput[] | Prisma.tblBookingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutUserInput | Prisma.tblBookingsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.tblBookingsUpsertWithWhereUniqueWithoutUserInput | Prisma.tblBookingsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.tblBookingsCreateManyUserInputEnvelope;
    set?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    disconnect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    delete?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    update?: Prisma.tblBookingsUpdateWithWhereUniqueWithoutUserInput | Prisma.tblBookingsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.tblBookingsUpdateManyWithWhereWithoutUserInput | Prisma.tblBookingsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
};
export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type tblBookingsCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput> | Prisma.tblBookingsCreateWithoutRoomInput[] | Prisma.tblBookingsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutRoomInput | Prisma.tblBookingsCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.tblBookingsCreateManyRoomInputEnvelope;
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
};
export type tblBookingsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput> | Prisma.tblBookingsCreateWithoutRoomInput[] | Prisma.tblBookingsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutRoomInput | Prisma.tblBookingsCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.tblBookingsCreateManyRoomInputEnvelope;
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
};
export type tblBookingsUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput> | Prisma.tblBookingsCreateWithoutRoomInput[] | Prisma.tblBookingsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutRoomInput | Prisma.tblBookingsCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.tblBookingsUpsertWithWhereUniqueWithoutRoomInput | Prisma.tblBookingsUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.tblBookingsCreateManyRoomInputEnvelope;
    set?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    disconnect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    delete?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    update?: Prisma.tblBookingsUpdateWithWhereUniqueWithoutRoomInput | Prisma.tblBookingsUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.tblBookingsUpdateManyWithWhereWithoutRoomInput | Prisma.tblBookingsUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
};
export type tblBookingsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput> | Prisma.tblBookingsCreateWithoutRoomInput[] | Prisma.tblBookingsUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.tblBookingsCreateOrConnectWithoutRoomInput | Prisma.tblBookingsCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.tblBookingsUpsertWithWhereUniqueWithoutRoomInput | Prisma.tblBookingsUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.tblBookingsCreateManyRoomInputEnvelope;
    set?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    disconnect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    delete?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    connect?: Prisma.tblBookingsWhereUniqueInput | Prisma.tblBookingsWhereUniqueInput[];
    update?: Prisma.tblBookingsUpdateWithWhereUniqueWithoutRoomInput | Prisma.tblBookingsUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.tblBookingsUpdateManyWithWhereWithoutRoomInput | Prisma.tblBookingsUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
};
export type tblBookingsCreateWithoutUserInput = {
    description: string;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
    room: Prisma.tblRoomsCreateNestedOneWithoutBookingsInput;
};
export type tblBookingsUncheckedCreateWithoutUserInput = {
    id?: number;
    description: string;
    roomId: number;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsCreateOrConnectWithoutUserInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput>;
};
export type tblBookingsCreateManyUserInputEnvelope = {
    data: Prisma.tblBookingsCreateManyUserInput | Prisma.tblBookingsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type tblBookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.tblBookingsUpdateWithoutUserInput, Prisma.tblBookingsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.tblBookingsCreateWithoutUserInput, Prisma.tblBookingsUncheckedCreateWithoutUserInput>;
};
export type tblBookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.tblBookingsUpdateWithoutUserInput, Prisma.tblBookingsUncheckedUpdateWithoutUserInput>;
};
export type tblBookingsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.tblBookingsScalarWhereInput;
    data: Prisma.XOR<Prisma.tblBookingsUpdateManyMutationInput, Prisma.tblBookingsUncheckedUpdateManyWithoutUserInput>;
};
export type tblBookingsScalarWhereInput = {
    AND?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
    OR?: Prisma.tblBookingsScalarWhereInput[];
    NOT?: Prisma.tblBookingsScalarWhereInput | Prisma.tblBookingsScalarWhereInput[];
    id?: Prisma.IntFilter<"tblBookings"> | number;
    userId?: Prisma.IntFilter<"tblBookings"> | number;
    description?: Prisma.StringFilter<"tblBookings"> | string;
    roomId?: Prisma.IntFilter<"tblBookings"> | number;
    attendeeCount?: Prisma.IntFilter<"tblBookings"> | number;
    bookingStatus?: Prisma.EnumBookingStatusFilter<"tblBookings"> | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"tblBookings"> | Date | string;
};
export type tblBookingsCreateWithoutRoomInput = {
    description: string;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
    user: Prisma.tblUsersCreateNestedOneWithoutBookingsInput;
};
export type tblBookingsUncheckedCreateWithoutRoomInput = {
    id?: number;
    userId: number;
    description: string;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsCreateOrConnectWithoutRoomInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput>;
};
export type tblBookingsCreateManyRoomInputEnvelope = {
    data: Prisma.tblBookingsCreateManyRoomInput | Prisma.tblBookingsCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type tblBookingsUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.tblBookingsUpdateWithoutRoomInput, Prisma.tblBookingsUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.tblBookingsCreateWithoutRoomInput, Prisma.tblBookingsUncheckedCreateWithoutRoomInput>;
};
export type tblBookingsUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.tblBookingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.tblBookingsUpdateWithoutRoomInput, Prisma.tblBookingsUncheckedUpdateWithoutRoomInput>;
};
export type tblBookingsUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.tblBookingsScalarWhereInput;
    data: Prisma.XOR<Prisma.tblBookingsUpdateManyMutationInput, Prisma.tblBookingsUncheckedUpdateManyWithoutRoomInput>;
};
export type tblBookingsCreateManyUserInput = {
    id?: number;
    description: string;
    roomId: number;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsUpdateWithoutUserInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    room?: Prisma.tblRoomsUpdateOneRequiredWithoutBookingsNestedInput;
};
export type tblBookingsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsCreateManyRoomInput = {
    id?: number;
    userId: number;
    description: string;
    attendeeCount: number;
    bookingStatus?: $Enums.BookingStatus;
    startTime: Date | string;
    endTime: Date | string;
    createdAt?: Date | string;
};
export type tblBookingsUpdateWithoutRoomInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.tblUsersUpdateOneRequiredWithoutBookingsNestedInput;
};
export type tblBookingsUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeCount?: Prisma.IntFieldUpdateOperationsInput | number;
    bookingStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tblBookingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    description?: boolean;
    roomId?: boolean;
    attendeeCount?: boolean;
    bookingStatus?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tblBookings"]>;
export type tblBookingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    description?: boolean;
    roomId?: boolean;
    attendeeCount?: boolean;
    bookingStatus?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tblBookings"]>;
export type tblBookingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    description?: boolean;
    roomId?: boolean;
    attendeeCount?: boolean;
    bookingStatus?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tblBookings"]>;
export type tblBookingsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    description?: boolean;
    roomId?: boolean;
    attendeeCount?: boolean;
    bookingStatus?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    createdAt?: boolean;
};
export type tblBookingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "description" | "roomId" | "attendeeCount" | "bookingStatus" | "startTime" | "endTime" | "createdAt", ExtArgs["result"]["tblBookings"]>;
export type tblBookingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
};
export type tblBookingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
};
export type tblBookingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.tblUsersDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.tblRoomsDefaultArgs<ExtArgs>;
};
export type $tblBookingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tblBookings";
    objects: {
        user: Prisma.$tblUsersPayload<ExtArgs>;
        room: Prisma.$tblRoomsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        description: string;
        roomId: number;
        attendeeCount: number;
        bookingStatus: $Enums.BookingStatus;
        startTime: Date;
        endTime: Date;
        createdAt: Date;
    }, ExtArgs["result"]["tblBookings"]>;
    composites: {};
};
export type tblBookingsGetPayload<S extends boolean | null | undefined | tblBookingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload, S>;
export type tblBookingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tblBookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TblBookingsCountAggregateInputType | true;
};
export interface tblBookingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tblBookings'];
        meta: {
            name: 'tblBookings';
        };
    };
    /**
     * Find zero or one TblBookings that matches the filter.
     * @param {tblBookingsFindUniqueArgs} args - Arguments to find a TblBookings
     * @example
     * // Get one TblBookings
     * const tblBookings = await prisma.tblBookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblBookingsFindUniqueArgs>(args: Prisma.SelectSubset<T, tblBookingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TblBookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tblBookingsFindUniqueOrThrowArgs} args - Arguments to find a TblBookings
     * @example
     * // Get one TblBookings
     * const tblBookings = await prisma.tblBookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblBookingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tblBookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TblBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsFindFirstArgs} args - Arguments to find a TblBookings
     * @example
     * // Get one TblBookings
     * const tblBookings = await prisma.tblBookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblBookingsFindFirstArgs>(args?: Prisma.SelectSubset<T, tblBookingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TblBookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsFindFirstOrThrowArgs} args - Arguments to find a TblBookings
     * @example
     * // Get one TblBookings
     * const tblBookings = await prisma.tblBookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblBookingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tblBookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TblBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblBookings
     * const tblBookings = await prisma.tblBookings.findMany()
     *
     * // Get first 10 TblBookings
     * const tblBookings = await prisma.tblBookings.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tblBookingsWithIdOnly = await prisma.tblBookings.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tblBookingsFindManyArgs>(args?: Prisma.SelectSubset<T, tblBookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TblBookings.
     * @param {tblBookingsCreateArgs} args - Arguments to create a TblBookings.
     * @example
     * // Create one TblBookings
     * const TblBookings = await prisma.tblBookings.create({
     *   data: {
     *     // ... data to create a TblBookings
     *   }
     * })
     *
     */
    create<T extends tblBookingsCreateArgs>(args: Prisma.SelectSubset<T, tblBookingsCreateArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TblBookings.
     * @param {tblBookingsCreateManyArgs} args - Arguments to create many TblBookings.
     * @example
     * // Create many TblBookings
     * const tblBookings = await prisma.tblBookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tblBookingsCreateManyArgs>(args?: Prisma.SelectSubset<T, tblBookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TblBookings and returns the data saved in the database.
     * @param {tblBookingsCreateManyAndReturnArgs} args - Arguments to create many TblBookings.
     * @example
     * // Create many TblBookings
     * const tblBookings = await prisma.tblBookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TblBookings and only return the `id`
     * const tblBookingsWithIdOnly = await prisma.tblBookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tblBookingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tblBookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TblBookings.
     * @param {tblBookingsDeleteArgs} args - Arguments to delete one TblBookings.
     * @example
     * // Delete one TblBookings
     * const TblBookings = await prisma.tblBookings.delete({
     *   where: {
     *     // ... filter to delete one TblBookings
     *   }
     * })
     *
     */
    delete<T extends tblBookingsDeleteArgs>(args: Prisma.SelectSubset<T, tblBookingsDeleteArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TblBookings.
     * @param {tblBookingsUpdateArgs} args - Arguments to update one TblBookings.
     * @example
     * // Update one TblBookings
     * const tblBookings = await prisma.tblBookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tblBookingsUpdateArgs>(args: Prisma.SelectSubset<T, tblBookingsUpdateArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TblBookings.
     * @param {tblBookingsDeleteManyArgs} args - Arguments to filter TblBookings to delete.
     * @example
     * // Delete a few TblBookings
     * const { count } = await prisma.tblBookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tblBookingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, tblBookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TblBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblBookings
     * const tblBookings = await prisma.tblBookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tblBookingsUpdateManyArgs>(args: Prisma.SelectSubset<T, tblBookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TblBookings and returns the data updated in the database.
     * @param {tblBookingsUpdateManyAndReturnArgs} args - Arguments to update many TblBookings.
     * @example
     * // Update many TblBookings
     * const tblBookings = await prisma.tblBookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TblBookings and only return the `id`
     * const tblBookingsWithIdOnly = await prisma.tblBookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends tblBookingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tblBookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TblBookings.
     * @param {tblBookingsUpsertArgs} args - Arguments to update or create a TblBookings.
     * @example
     * // Update or create a TblBookings
     * const tblBookings = await prisma.tblBookings.upsert({
     *   create: {
     *     // ... data to create a TblBookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblBookings we want to update
     *   }
     * })
     */
    upsert<T extends tblBookingsUpsertArgs>(args: Prisma.SelectSubset<T, tblBookingsUpsertArgs<ExtArgs>>): Prisma.Prisma__tblBookingsClient<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TblBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsCountArgs} args - Arguments to filter TblBookings to count.
     * @example
     * // Count the number of TblBookings
     * const count = await prisma.tblBookings.count({
     *   where: {
     *     // ... the filter for the TblBookings we want to count
     *   }
     * })
    **/
    count<T extends tblBookingsCountArgs>(args?: Prisma.Subset<T, tblBookingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TblBookingsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TblBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblBookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblBookingsAggregateArgs>(args: Prisma.Subset<T, TblBookingsAggregateArgs>): Prisma.PrismaPromise<GetTblBookingsAggregateType<T>>;
    /**
     * Group by TblBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends tblBookingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tblBookingsGroupByArgs['orderBy'];
    } : {
        orderBy?: tblBookingsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tblBookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tblBookings model
     */
    readonly fields: tblBookingsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tblBookings.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tblBookingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.tblUsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tblUsersDefaultArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.tblRoomsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tblRoomsDefaultArgs<ExtArgs>>): Prisma.Prisma__tblRoomsClient<runtime.Types.Result.GetResult<Prisma.$tblRoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the tblBookings model
 */
export interface tblBookingsFieldRefs {
    readonly id: Prisma.FieldRef<"tblBookings", 'Int'>;
    readonly userId: Prisma.FieldRef<"tblBookings", 'Int'>;
    readonly description: Prisma.FieldRef<"tblBookings", 'String'>;
    readonly roomId: Prisma.FieldRef<"tblBookings", 'Int'>;
    readonly attendeeCount: Prisma.FieldRef<"tblBookings", 'Int'>;
    readonly bookingStatus: Prisma.FieldRef<"tblBookings", 'BookingStatus'>;
    readonly startTime: Prisma.FieldRef<"tblBookings", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"tblBookings", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"tblBookings", 'DateTime'>;
}
/**
 * tblBookings findUnique
 */
export type tblBookingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter, which tblBookings to fetch.
     */
    where: Prisma.tblBookingsWhereUniqueInput;
};
/**
 * tblBookings findUniqueOrThrow
 */
export type tblBookingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter, which tblBookings to fetch.
     */
    where: Prisma.tblBookingsWhereUniqueInput;
};
/**
 * tblBookings findFirst
 */
export type tblBookingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter, which tblBookings to fetch.
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblBookings to fetch.
     */
    orderBy?: Prisma.tblBookingsOrderByWithRelationInput | Prisma.tblBookingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tblBookings.
     */
    cursor?: Prisma.tblBookingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tblBookings.
     */
    distinct?: Prisma.TblBookingsScalarFieldEnum | Prisma.TblBookingsScalarFieldEnum[];
};
/**
 * tblBookings findFirstOrThrow
 */
export type tblBookingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter, which tblBookings to fetch.
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblBookings to fetch.
     */
    orderBy?: Prisma.tblBookingsOrderByWithRelationInput | Prisma.tblBookingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tblBookings.
     */
    cursor?: Prisma.tblBookingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tblBookings.
     */
    distinct?: Prisma.TblBookingsScalarFieldEnum | Prisma.TblBookingsScalarFieldEnum[];
};
/**
 * tblBookings findMany
 */
export type tblBookingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter, which tblBookings to fetch.
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblBookings to fetch.
     */
    orderBy?: Prisma.tblBookingsOrderByWithRelationInput | Prisma.tblBookingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tblBookings.
     */
    cursor?: Prisma.tblBookingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblBookings.
     */
    skip?: number;
    distinct?: Prisma.TblBookingsScalarFieldEnum | Prisma.TblBookingsScalarFieldEnum[];
};
/**
 * tblBookings create
 */
export type tblBookingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * The data needed to create a tblBookings.
     */
    data: Prisma.XOR<Prisma.tblBookingsCreateInput, Prisma.tblBookingsUncheckedCreateInput>;
};
/**
 * tblBookings createMany
 */
export type tblBookingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblBookings.
     */
    data: Prisma.tblBookingsCreateManyInput | Prisma.tblBookingsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tblBookings createManyAndReturn
 */
export type tblBookingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * The data used to create many tblBookings.
     */
    data: Prisma.tblBookingsCreateManyInput | Prisma.tblBookingsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tblBookings update
 */
export type tblBookingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * The data needed to update a tblBookings.
     */
    data: Prisma.XOR<Prisma.tblBookingsUpdateInput, Prisma.tblBookingsUncheckedUpdateInput>;
    /**
     * Choose, which tblBookings to update.
     */
    where: Prisma.tblBookingsWhereUniqueInput;
};
/**
 * tblBookings updateMany
 */
export type tblBookingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tblBookings.
     */
    data: Prisma.XOR<Prisma.tblBookingsUpdateManyMutationInput, Prisma.tblBookingsUncheckedUpdateManyInput>;
    /**
     * Filter which tblBookings to update
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * Limit how many tblBookings to update.
     */
    limit?: number;
};
/**
 * tblBookings updateManyAndReturn
 */
export type tblBookingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * The data used to update tblBookings.
     */
    data: Prisma.XOR<Prisma.tblBookingsUpdateManyMutationInput, Prisma.tblBookingsUncheckedUpdateManyInput>;
    /**
     * Filter which tblBookings to update
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * Limit how many tblBookings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tblBookings upsert
 */
export type tblBookingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * The filter to search for the tblBookings to update in case it exists.
     */
    where: Prisma.tblBookingsWhereUniqueInput;
    /**
     * In case the tblBookings found by the `where` argument doesn't exist, create a new tblBookings with this data.
     */
    create: Prisma.XOR<Prisma.tblBookingsCreateInput, Prisma.tblBookingsUncheckedCreateInput>;
    /**
     * In case the tblBookings was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tblBookingsUpdateInput, Prisma.tblBookingsUncheckedUpdateInput>;
};
/**
 * tblBookings delete
 */
export type tblBookingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
    /**
     * Filter which tblBookings to delete.
     */
    where: Prisma.tblBookingsWhereUniqueInput;
};
/**
 * tblBookings deleteMany
 */
export type tblBookingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tblBookings to delete
     */
    where?: Prisma.tblBookingsWhereInput;
    /**
     * Limit how many tblBookings to delete.
     */
    limit?: number;
};
/**
 * tblBookings without action
 */
export type tblBookingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBookings
     */
    select?: Prisma.tblBookingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblBookings
     */
    omit?: Prisma.tblBookingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblBookingsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=tblBookings.d.ts.map