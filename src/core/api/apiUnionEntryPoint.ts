import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiUnionEntryPoint = createApi({
    reducerPath: 'apiUnionEntryPoint',
    baseQuery: fetchBaseQuery(),
    endpoints: () => ({}),
});
