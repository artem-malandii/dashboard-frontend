import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
      }}
    >
      <Link to="/report">Reports</Link>
      <Link to="/time-doctor">Time Doctor</Link>
      <Link to="/github">GitHub</Link>
    </Box>
  );
}
