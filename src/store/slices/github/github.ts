import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ENDPOINTS } from "../../../constants/api/api";
import type { IGitHubRequests } from "./interfaces/requests.interface";
import type { IGithubActivityResponse } from "./interfaces/responses.interface";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getActivity: build.mutation<IGithubActivityResponse[], IGitHubRequests>({
      query: (data: IGitHubRequests) => ({
        url: `${ENDPOINTS.GITHUB.GET_ACTIVITY}?repoName=${data.repoName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetActivityMutation } = githubApi;
