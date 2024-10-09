import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENDPOINTS } from "../../../constants/api/api";
import type { ResponseFilesData } from "../reports/interfaces/responses.interface";

export const timeDoctorApi = createApi({
  reducerPath: "timeDoctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getScreenshots: build.mutation<ResponseFilesData, void>({
      query: () => ({
        url: ENDPOINTS.SCREENSHOTS.GET_SCREENSHOTS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetScreenshotsMutation } = timeDoctorApi;
