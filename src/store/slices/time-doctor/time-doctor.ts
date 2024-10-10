import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENDPOINTS } from "../../../constants/api/api";
import type { IScreenshotRequests } from "./interfaces/requests.interface";
import type {
  IResponseUsers,
  ResponseFilesData,
} from "./interfaces/responses.interface";

export const timeDoctorApi = createApi({
  reducerPath: "timeDoctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getScreenshots: build.mutation<ResponseFilesData, IScreenshotRequests>({
      query: (data: IScreenshotRequests) => {
        const query = new URLSearchParams({
          userIds: data.userIds.join(","),
          date: data.date,
        }).toString();

        const url =
          data.userIds.length > 0
            ? `${ENDPOINTS.TIME_DOCTOR.GET_SCREENSHOTS}?${query}`
            : ENDPOINTS.TIME_DOCTOR.GET_SCREENSHOTS;

        return {
          url,
          method: "GET",
        };
      },
    }),
    getUsers: build.mutation<IResponseUsers, void>({
      query: () => ({
        url: ENDPOINTS.TIME_DOCTOR.GET_USERS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetScreenshotsMutation, useGetUsersMutation } = timeDoctorApi;
