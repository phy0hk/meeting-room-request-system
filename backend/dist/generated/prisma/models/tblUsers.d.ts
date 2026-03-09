import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model tblUsers
 *
 */
export type tblUsersModel = runtime.Types.Result.DefaultSelection<Prisma.$tblUsersPayload>;
export type AggregateTblUsers = {
    _count: TblUsersCountAggregateOutputType | null;
    _avg: TblUsersAvgAggregateOutputType | null;
    _sum: TblUsersSumAggregateOutputType | null;
    _min: TblUsersMinAggregateOutputType | null;
    _max: TblUsersMaxAggregateOutputType | null;
};
export type TblUsersAvgAggregateOutputType = {
    id: number | null;
};
export type TblUsersSumAggregateOutputType = {
    id: number | null;
};
export type TblUsersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    username: string | null;
    role: $Enums.Role | null;
    password: string | null;
    status: $Enums.UserStatus | null;
};
export type TblUsersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    username: string | null;
    role: $Enums.Role | null;
    password: string | null;
    status: $Enums.UserStatus | null;
};
export type TblUsersCountAggregateOutputType = {
    id: number;
    name: number;
    username: number;
    role: number;
    password: number;
    status: number;
    _all: number;
};
export type TblUsersAvgAggregateInputType = {
    id?: true;
};
export type TblUsersSumAggregateInputType = {
    id?: true;
};
export type TblUsersMinAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    role?: true;
    password?: true;
    status?: true;
};
export type TblUsersMaxAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    role?: true;
    password?: true;
    status?: true;
};
export type TblUsersCountAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    role?: true;
    password?: true;
    status?: true;
    _all?: true;
};
export type TblUsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tblUsers to aggregate.
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblUsers to fetch.
     */
    orderBy?: Prisma.tblUsersOrderByWithRelationInput | Prisma.tblUsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tblUsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tblUsers
    **/
    _count?: true | TblUsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TblUsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TblUsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TblUsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TblUsersMaxAggregateInputType;
};
export type GetTblUsersAggregateType<T extends TblUsersAggregateArgs> = {
    [P in keyof T & keyof AggregateTblUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTblUsers[P]> : Prisma.GetScalarType<T[P], AggregateTblUsers[P]>;
};
export type tblUsersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tblUsersWhereInput;
    orderBy?: Prisma.tblUsersOrderByWithAggregationInput | Prisma.tblUsersOrderByWithAggregationInput[];
    by: Prisma.TblUsersScalarFieldEnum[] | Prisma.TblUsersScalarFieldEnum;
    having?: Prisma.tblUsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TblUsersCountAggregateInputType | true;
    _avg?: TblUsersAvgAggregateInputType;
    _sum?: TblUsersSumAggregateInputType;
    _min?: TblUsersMinAggregateInputType;
    _max?: TblUsersMaxAggregateInputType;
};
export type TblUsersGroupByOutputType = {
    id: number;
    name: string;
    username: string;
    role: $Enums.Role;
    password: string;
    status: $Enums.UserStatus;
    _count: TblUsersCountAggregateOutputType | null;
    _avg: TblUsersAvgAggregateOutputType | null;
    _sum: TblUsersSumAggregateOutputType | null;
    _min: TblUsersMinAggregateOutputType | null;
    _max: TblUsersMaxAggregateOutputType | null;
};
type GetTblUsersGroupByPayload<T extends tblUsersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TblUsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TblUsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TblUsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TblUsersGroupByOutputType[P]>;
}>>;
export type tblUsersWhereInput = {
    AND?: Prisma.tblUsersWhereInput | Prisma.tblUsersWhereInput[];
    OR?: Prisma.tblUsersWhereInput[];
    NOT?: Prisma.tblUsersWhereInput | Prisma.tblUsersWhereInput[];
    id?: Prisma.IntFilter<"tblUsers"> | number;
    name?: Prisma.StringFilter<"tblUsers"> | string;
    username?: Prisma.StringFilter<"tblUsers"> | string;
    role?: Prisma.EnumRoleFilter<"tblUsers"> | $Enums.Role;
    password?: Prisma.StringFilter<"tblUsers"> | string;
    status?: Prisma.EnumUserStatusFilter<"tblUsers"> | $Enums.UserStatus;
    bookings?: Prisma.TblBookingsListRelationFilter;
};
export type tblUsersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookings?: Prisma.tblBookingsOrderByRelationAggregateInput;
};
export type tblUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    AND?: Prisma.tblUsersWhereInput | Prisma.tblUsersWhereInput[];
    OR?: Prisma.tblUsersWhereInput[];
    NOT?: Prisma.tblUsersWhereInput | Prisma.tblUsersWhereInput[];
    name?: Prisma.StringFilter<"tblUsers"> | string;
    role?: Prisma.EnumRoleFilter<"tblUsers"> | $Enums.Role;
    password?: Prisma.StringFilter<"tblUsers"> | string;
    status?: Prisma.EnumUserStatusFilter<"tblUsers"> | $Enums.UserStatus;
    bookings?: Prisma.TblBookingsListRelationFilter;
}, "id" | "username">;
export type tblUsersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.tblUsersCountOrderByAggregateInput;
    _avg?: Prisma.tblUsersAvgOrderByAggregateInput;
    _max?: Prisma.tblUsersMaxOrderByAggregateInput;
    _min?: Prisma.tblUsersMinOrderByAggregateInput;
    _sum?: Prisma.tblUsersSumOrderByAggregateInput;
};
export type tblUsersScalarWhereWithAggregatesInput = {
    AND?: Prisma.tblUsersScalarWhereWithAggregatesInput | Prisma.tblUsersScalarWhereWithAggregatesInput[];
    OR?: Prisma.tblUsersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tblUsersScalarWhereWithAggregatesInput | Prisma.tblUsersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"tblUsers"> | number;
    name?: Prisma.StringWithAggregatesFilter<"tblUsers"> | string;
    username?: Prisma.StringWithAggregatesFilter<"tblUsers"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"tblUsers"> | $Enums.Role;
    password?: Prisma.StringWithAggregatesFilter<"tblUsers"> | string;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"tblUsers"> | $Enums.UserStatus;
};
export type tblUsersCreateInput = {
    name: string;
    username: string;
    role?: $Enums.Role;
    password: string;
    status?: $Enums.UserStatus;
    bookings?: Prisma.tblBookingsCreateNestedManyWithoutUserInput;
};
export type tblUsersUncheckedCreateInput = {
    id?: number;
    name: string;
    username: string;
    role?: $Enums.Role;
    password: string;
    status?: $Enums.UserStatus;
    bookings?: Prisma.tblBookingsUncheckedCreateNestedManyWithoutUserInput;
};
export type tblUsersUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    bookings?: Prisma.tblBookingsUpdateManyWithoutUserNestedInput;
};
export type tblUsersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    bookings?: Prisma.tblBookingsUncheckedUpdateManyWithoutUserNestedInput;
};
export type tblUsersCreateManyInput = {
    id?: number;
    name: string;
    username: string;
    role?: $Enums.Role;
    password: string;
    status?: $Enums.UserStatus;
};
export type tblUsersUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
};
export type tblUsersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
};
export type tblUsersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tblUsersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type tblUsersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tblUsersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tblUsersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TblUsersScalarRelationFilter = {
    is?: Prisma.tblUsersWhereInput;
    isNot?: Prisma.tblUsersWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type tblUsersCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.tblUsersCreateWithoutBookingsInput, Prisma.tblUsersUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.tblUsersCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.tblUsersWhereUniqueInput;
};
export type tblUsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.tblUsersCreateWithoutBookingsInput, Prisma.tblUsersUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.tblUsersCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.tblUsersUpsertWithoutBookingsInput;
    connect?: Prisma.tblUsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tblUsersUpdateToOneWithWhereWithoutBookingsInput, Prisma.tblUsersUpdateWithoutBookingsInput>, Prisma.tblUsersUncheckedUpdateWithoutBookingsInput>;
};
export type tblUsersCreateWithoutBookingsInput = {
    name: string;
    username: string;
    role?: $Enums.Role;
    password: string;
    status?: $Enums.UserStatus;
};
export type tblUsersUncheckedCreateWithoutBookingsInput = {
    id?: number;
    name: string;
    username: string;
    role?: $Enums.Role;
    password: string;
    status?: $Enums.UserStatus;
};
export type tblUsersCreateOrConnectWithoutBookingsInput = {
    where: Prisma.tblUsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.tblUsersCreateWithoutBookingsInput, Prisma.tblUsersUncheckedCreateWithoutBookingsInput>;
};
export type tblUsersUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.tblUsersUpdateWithoutBookingsInput, Prisma.tblUsersUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.tblUsersCreateWithoutBookingsInput, Prisma.tblUsersUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.tblUsersWhereInput;
};
export type tblUsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.tblUsersWhereInput;
    data: Prisma.XOR<Prisma.tblUsersUpdateWithoutBookingsInput, Prisma.tblUsersUncheckedUpdateWithoutBookingsInput>;
};
export type tblUsersUpdateWithoutBookingsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
};
export type tblUsersUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
};
/**
 * Count Type TblUsersCountOutputType
 */
export type TblUsersCountOutputType = {
    bookings: number;
};
export type TblUsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | TblUsersCountOutputTypeCountBookingsArgs;
};
/**
 * TblUsersCountOutputType without action
 */
export type TblUsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblUsersCountOutputType
     */
    select?: Prisma.TblUsersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TblUsersCountOutputType without action
 */
export type TblUsersCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tblBookingsWhereInput;
};
export type tblUsersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    role?: boolean;
    password?: boolean;
    status?: boolean;
    bookings?: boolean | Prisma.tblUsers$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.TblUsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tblUsers"]>;
export type tblUsersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    role?: boolean;
    password?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tblUsers"]>;
export type tblUsersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    role?: boolean;
    password?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tblUsers"]>;
export type tblUsersSelectScalar = {
    id?: boolean;
    name?: boolean;
    username?: boolean;
    role?: boolean;
    password?: boolean;
    status?: boolean;
};
export type tblUsersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "username" | "role" | "password" | "status", ExtArgs["result"]["tblUsers"]>;
export type tblUsersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.tblUsers$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.TblUsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tblUsersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tblUsersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tblUsersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tblUsers";
    objects: {
        bookings: Prisma.$tblBookingsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        username: string;
        role: $Enums.Role;
        password: string;
        status: $Enums.UserStatus;
    }, ExtArgs["result"]["tblUsers"]>;
    composites: {};
};
export type tblUsersGetPayload<S extends boolean | null | undefined | tblUsersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tblUsersPayload, S>;
export type tblUsersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tblUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TblUsersCountAggregateInputType | true;
};
export interface tblUsersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tblUsers'];
        meta: {
            name: 'tblUsers';
        };
    };
    /**
     * Find zero or one TblUsers that matches the filter.
     * @param {tblUsersFindUniqueArgs} args - Arguments to find a TblUsers
     * @example
     * // Get one TblUsers
     * const tblUsers = await prisma.tblUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblUsersFindUniqueArgs>(args: Prisma.SelectSubset<T, tblUsersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TblUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tblUsersFindUniqueOrThrowArgs} args - Arguments to find a TblUsers
     * @example
     * // Get one TblUsers
     * const tblUsers = await prisma.tblUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblUsersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tblUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TblUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersFindFirstArgs} args - Arguments to find a TblUsers
     * @example
     * // Get one TblUsers
     * const tblUsers = await prisma.tblUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblUsersFindFirstArgs>(args?: Prisma.SelectSubset<T, tblUsersFindFirstArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TblUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersFindFirstOrThrowArgs} args - Arguments to find a TblUsers
     * @example
     * // Get one TblUsers
     * const tblUsers = await prisma.tblUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblUsersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tblUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TblUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblUsers
     * const tblUsers = await prisma.tblUsers.findMany()
     *
     * // Get first 10 TblUsers
     * const tblUsers = await prisma.tblUsers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tblUsersWithIdOnly = await prisma.tblUsers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tblUsersFindManyArgs>(args?: Prisma.SelectSubset<T, tblUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TblUsers.
     * @param {tblUsersCreateArgs} args - Arguments to create a TblUsers.
     * @example
     * // Create one TblUsers
     * const TblUsers = await prisma.tblUsers.create({
     *   data: {
     *     // ... data to create a TblUsers
     *   }
     * })
     *
     */
    create<T extends tblUsersCreateArgs>(args: Prisma.SelectSubset<T, tblUsersCreateArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TblUsers.
     * @param {tblUsersCreateManyArgs} args - Arguments to create many TblUsers.
     * @example
     * // Create many TblUsers
     * const tblUsers = await prisma.tblUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tblUsersCreateManyArgs>(args?: Prisma.SelectSubset<T, tblUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TblUsers and returns the data saved in the database.
     * @param {tblUsersCreateManyAndReturnArgs} args - Arguments to create many TblUsers.
     * @example
     * // Create many TblUsers
     * const tblUsers = await prisma.tblUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TblUsers and only return the `id`
     * const tblUsersWithIdOnly = await prisma.tblUsers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tblUsersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tblUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TblUsers.
     * @param {tblUsersDeleteArgs} args - Arguments to delete one TblUsers.
     * @example
     * // Delete one TblUsers
     * const TblUsers = await prisma.tblUsers.delete({
     *   where: {
     *     // ... filter to delete one TblUsers
     *   }
     * })
     *
     */
    delete<T extends tblUsersDeleteArgs>(args: Prisma.SelectSubset<T, tblUsersDeleteArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TblUsers.
     * @param {tblUsersUpdateArgs} args - Arguments to update one TblUsers.
     * @example
     * // Update one TblUsers
     * const tblUsers = await prisma.tblUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tblUsersUpdateArgs>(args: Prisma.SelectSubset<T, tblUsersUpdateArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TblUsers.
     * @param {tblUsersDeleteManyArgs} args - Arguments to filter TblUsers to delete.
     * @example
     * // Delete a few TblUsers
     * const { count } = await prisma.tblUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tblUsersDeleteManyArgs>(args?: Prisma.SelectSubset<T, tblUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TblUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblUsers
     * const tblUsers = await prisma.tblUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tblUsersUpdateManyArgs>(args: Prisma.SelectSubset<T, tblUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TblUsers and returns the data updated in the database.
     * @param {tblUsersUpdateManyAndReturnArgs} args - Arguments to update many TblUsers.
     * @example
     * // Update many TblUsers
     * const tblUsers = await prisma.tblUsers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TblUsers and only return the `id`
     * const tblUsersWithIdOnly = await prisma.tblUsers.updateManyAndReturn({
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
    updateManyAndReturn<T extends tblUsersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tblUsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TblUsers.
     * @param {tblUsersUpsertArgs} args - Arguments to update or create a TblUsers.
     * @example
     * // Update or create a TblUsers
     * const tblUsers = await prisma.tblUsers.upsert({
     *   create: {
     *     // ... data to create a TblUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblUsers we want to update
     *   }
     * })
     */
    upsert<T extends tblUsersUpsertArgs>(args: Prisma.SelectSubset<T, tblUsersUpsertArgs<ExtArgs>>): Prisma.Prisma__tblUsersClient<runtime.Types.Result.GetResult<Prisma.$tblUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TblUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersCountArgs} args - Arguments to filter TblUsers to count.
     * @example
     * // Count the number of TblUsers
     * const count = await prisma.tblUsers.count({
     *   where: {
     *     // ... the filter for the TblUsers we want to count
     *   }
     * })
    **/
    count<T extends tblUsersCountArgs>(args?: Prisma.Subset<T, tblUsersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TblUsersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TblUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblUsersAggregateArgs>(args: Prisma.Subset<T, TblUsersAggregateArgs>): Prisma.PrismaPromise<GetTblUsersAggregateType<T>>;
    /**
     * Group by TblUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblUsersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tblUsersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tblUsersGroupByArgs['orderBy'];
    } : {
        orderBy?: tblUsersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tblUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tblUsers model
     */
    readonly fields: tblUsersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tblUsers.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tblUsersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.tblUsers$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tblUsers$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tblBookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tblUsers model
 */
export interface tblUsersFieldRefs {
    readonly id: Prisma.FieldRef<"tblUsers", 'Int'>;
    readonly name: Prisma.FieldRef<"tblUsers", 'String'>;
    readonly username: Prisma.FieldRef<"tblUsers", 'String'>;
    readonly role: Prisma.FieldRef<"tblUsers", 'Role'>;
    readonly password: Prisma.FieldRef<"tblUsers", 'String'>;
    readonly status: Prisma.FieldRef<"tblUsers", 'UserStatus'>;
}
/**
 * tblUsers findUnique
 */
export type tblUsersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter, which tblUsers to fetch.
     */
    where: Prisma.tblUsersWhereUniqueInput;
};
/**
 * tblUsers findUniqueOrThrow
 */
export type tblUsersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter, which tblUsers to fetch.
     */
    where: Prisma.tblUsersWhereUniqueInput;
};
/**
 * tblUsers findFirst
 */
export type tblUsersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter, which tblUsers to fetch.
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblUsers to fetch.
     */
    orderBy?: Prisma.tblUsersOrderByWithRelationInput | Prisma.tblUsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tblUsers.
     */
    cursor?: Prisma.tblUsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tblUsers.
     */
    distinct?: Prisma.TblUsersScalarFieldEnum | Prisma.TblUsersScalarFieldEnum[];
};
/**
 * tblUsers findFirstOrThrow
 */
export type tblUsersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter, which tblUsers to fetch.
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblUsers to fetch.
     */
    orderBy?: Prisma.tblUsersOrderByWithRelationInput | Prisma.tblUsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tblUsers.
     */
    cursor?: Prisma.tblUsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tblUsers.
     */
    distinct?: Prisma.TblUsersScalarFieldEnum | Prisma.TblUsersScalarFieldEnum[];
};
/**
 * tblUsers findMany
 */
export type tblUsersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter, which tblUsers to fetch.
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tblUsers to fetch.
     */
    orderBy?: Prisma.tblUsersOrderByWithRelationInput | Prisma.tblUsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tblUsers.
     */
    cursor?: Prisma.tblUsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tblUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tblUsers.
     */
    skip?: number;
    distinct?: Prisma.TblUsersScalarFieldEnum | Prisma.TblUsersScalarFieldEnum[];
};
/**
 * tblUsers create
 */
export type tblUsersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * The data needed to create a tblUsers.
     */
    data: Prisma.XOR<Prisma.tblUsersCreateInput, Prisma.tblUsersUncheckedCreateInput>;
};
/**
 * tblUsers createMany
 */
export type tblUsersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblUsers.
     */
    data: Prisma.tblUsersCreateManyInput | Prisma.tblUsersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tblUsers createManyAndReturn
 */
export type tblUsersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * The data used to create many tblUsers.
     */
    data: Prisma.tblUsersCreateManyInput | Prisma.tblUsersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tblUsers update
 */
export type tblUsersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * The data needed to update a tblUsers.
     */
    data: Prisma.XOR<Prisma.tblUsersUpdateInput, Prisma.tblUsersUncheckedUpdateInput>;
    /**
     * Choose, which tblUsers to update.
     */
    where: Prisma.tblUsersWhereUniqueInput;
};
/**
 * tblUsers updateMany
 */
export type tblUsersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tblUsers.
     */
    data: Prisma.XOR<Prisma.tblUsersUpdateManyMutationInput, Prisma.tblUsersUncheckedUpdateManyInput>;
    /**
     * Filter which tblUsers to update
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * Limit how many tblUsers to update.
     */
    limit?: number;
};
/**
 * tblUsers updateManyAndReturn
 */
export type tblUsersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * The data used to update tblUsers.
     */
    data: Prisma.XOR<Prisma.tblUsersUpdateManyMutationInput, Prisma.tblUsersUncheckedUpdateManyInput>;
    /**
     * Filter which tblUsers to update
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * Limit how many tblUsers to update.
     */
    limit?: number;
};
/**
 * tblUsers upsert
 */
export type tblUsersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * The filter to search for the tblUsers to update in case it exists.
     */
    where: Prisma.tblUsersWhereUniqueInput;
    /**
     * In case the tblUsers found by the `where` argument doesn't exist, create a new tblUsers with this data.
     */
    create: Prisma.XOR<Prisma.tblUsersCreateInput, Prisma.tblUsersUncheckedCreateInput>;
    /**
     * In case the tblUsers was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tblUsersUpdateInput, Prisma.tblUsersUncheckedUpdateInput>;
};
/**
 * tblUsers delete
 */
export type tblUsersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
    /**
     * Filter which tblUsers to delete.
     */
    where: Prisma.tblUsersWhereUniqueInput;
};
/**
 * tblUsers deleteMany
 */
export type tblUsersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tblUsers to delete
     */
    where?: Prisma.tblUsersWhereInput;
    /**
     * Limit how many tblUsers to delete.
     */
    limit?: number;
};
/**
 * tblUsers.bookings
 */
export type tblUsers$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.tblBookingsWhereInput;
    orderBy?: Prisma.tblBookingsOrderByWithRelationInput | Prisma.tblBookingsOrderByWithRelationInput[];
    cursor?: Prisma.tblBookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TblBookingsScalarFieldEnum | Prisma.TblBookingsScalarFieldEnum[];
};
/**
 * tblUsers without action
 */
export type tblUsersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblUsers
     */
    select?: Prisma.tblUsersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tblUsers
     */
    omit?: Prisma.tblUsersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tblUsersInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=tblUsers.d.ts.map