import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: (builder) => ({
        getCountriesByName: builder.query({
            query: (name) => {
                return `name/${name}`;
            }
        }),
        getCountriesByRegion: builder.query({
            query: (region) => {
                return `region/${region}`;
            }
        })
    })
});

export const { useGetCountriesByNameQuery, useGetCountriesByRegionQuery } =
    countriesApi;
