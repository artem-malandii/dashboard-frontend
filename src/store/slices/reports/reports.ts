import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENDPOINTS } from "../../../constants/api/api";
import { IGetReportsResponse } from "./interfaces/responses.interface";

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getReports: build.mutation<IGetReportsResponse, void>({
      query: () => ({
        url: ENDPOINTS.REPORTS.GET_REPORTS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetReportsMutation } = reportsApi;
