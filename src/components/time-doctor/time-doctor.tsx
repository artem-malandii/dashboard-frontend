import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  useGetScreenshotsMutation,
  useGetUsersMutation,
} from "../../store/slices/time-doctor/time-doctor";
import { ScreenshotFilter } from "./screenshot-filter/screenshot-filter";
import { ScreenshotGallery } from "./screenshot-gallery/screenshot-gallery";

export function TimeDoctor() {
  const [getScreenshots, { data: screenshotsData }] =
    useGetScreenshotsMutation();
  const [getUsers, { data: userData }] = useGetUsersMutation();

  useEffect(() => {
    getUsers().unwrap();
  }, []);

  const onApplyClick = useCallback((personIds: string[]) => {
    getScreenshots({ userIds: personIds }).unwrap();
  }, []);

  return (
    <Box>
      <Link to="/">Back</Link>
      <Box>
        <span>Time Doctor</span>
      </Box>
      <Box>
        {userData && (
          <ScreenshotFilter usersData={userData} onApplyClick={onApplyClick} />
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
