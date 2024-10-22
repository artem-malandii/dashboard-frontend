import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  useGetProjectsMutation,
  useGetScreenshotsMutation,
  useGetUsersMutation,
} from "../../store/slices/time-doctor/time-doctor";
import { ScreenshotFilter } from "./screenshot-filter/screenshot-filter";
import { ScreenshotGallery } from "./screenshot-gallery/screenshot-gallery";

export function TimeDoctor() {
  const [getScreenshots, { data: screenshotsData }] =
    useGetScreenshotsMutation();
  const [getUsers, { data: userData }] = useGetUsersMutation();
  const [getProjects, { data: projectData }] = useGetProjectsMutation();

  useEffect(() => {
    getUsers().unwrap();
    getProjects().unwrap();
  }, []);

  const onApplyClick = useCallback((personIds: string[], date: string) => {
    getScreenshots({ userIds: personIds, date }).unwrap();
  }, []);

  return (
    <Box>
      <Link to="/">Back</Link>
      <Box>
        <span>Time Doctor</span>
      </Box>
      <Box>
        {userData && projectData && (
          <ScreenshotFilter
            usersData={userData}
            projectData={projectData}
            onApplyClick={onApplyClick}
          />
        )}
      </Box>
      <Box>
        {screenshotsData && userData && (
          <ScreenshotGallery
            responseData={screenshotsData}
            usersData={userData}
          />
        )}
      </Box>
    </Box>
  );
}
