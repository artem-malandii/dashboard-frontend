import { Box } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetScreenshotsMutation } from "../../store/slices/time-doctor/time-doctor";
import { ScreenshotGallery } from "./screenshot-gallery/screenshot-gallery";

export function TimeDoctor() {
  const [getScreenshots, { data }] = useGetScreenshotsMutation();

  useEffect(() => {
    getScreenshots().unwrap();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box>
      <Link to="/">Back</Link>
      <Box>
        <span>Time Doctor</span>
      </Box>
      <Box>{data && <ScreenshotGallery responseData={data} />}</Box>
    </Box>
  );
}
