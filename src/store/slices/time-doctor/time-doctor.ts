import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENDPOINTS } from "../../../constants/api/api";

export const timeDoctorApi = createApi({
  reducerPath: "timeDoctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TIME_DOCTOR_API_URL,
  }),
  endpoints: (build) => ({
    getScreenshots: build.mutation<any, void>({
      query: () => ({
        url: `${ENDPOINTS.SCREENSHOTS.GET_SCREENSHOTS}?company=Zvv44FGittE1VpXC&user=Zvv7IzEboLpAVxWQ`,
        method: "GET",
        headers: {
          Authorization: "JWT 1o7XoxtjcxPQYZoO4Lc7_kUTe6Xc4BTs5mrbriE-2zfo",
        },
      }),
    }),
  }),
});

export const { useGetScreenshotsMutation } = timeDoctorApi;
