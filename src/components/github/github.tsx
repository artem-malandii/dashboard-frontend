import {
  Box,
  Button,
  Chip,
  FormControl,
  Link as LinkMUI,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CalendarLogo } from "../../media/calendar";
import { GitLogo } from "../../media/git";
import { ProfileLogo } from "../../media/profile";
import { useGetActivityMutation } from "../../store/slices/github/github";
import styles from "./github.module.scss";

export function Github() {
  const [repoName, setRepoName] = useState("");

  const [getGithubActivity, { data: githubActivityData }] =
    useGetActivityMutation();

  const onApplyClick = () => {
    getGithubActivity({
      repoName,
    });
  };

  useEffect(() => {
    console.log(githubActivityData);
  }, [githubActivityData]);

  return (
    <Box className={styles.app}>
      <Link to="/">Back</Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: "15px",
        }}
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            placeholder="Repository name"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" onClick={onApplyClick}>
          Apply
        </Button>
      </Box>

      <Box className={styles.activityWrapper}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Latest Git Activity</Typography>
          <LinkMUI
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            See all
          </LinkMUI>
        </Box>
        {githubActivityData &&
          githubActivityData.map((item) => (
            <Box className={styles.activity}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "15px",
                  width: "100%",
                }}
              >
                <Box
                  className={`${styles.column} ${styles.columnCenter}`}
                  sx={{ width: "20%" }}
                >
                  <ProfileLogo />
                  <Typography>{item.username}</Typography>
                </Box>
                <Box
                  className={`${styles.column} ${styles.columnCenter}`}
                  sx={{ width: "10%", justifyContent: "center" }}
                >
                  <Chip
                    label={item.type}
                    variant="outlined"
                    sx={{
                      color: item.type === "commit" ? "#d7a109de" : "#bd3ae9",
                      border:
                        item.type === "commit"
                          ? "1px solid #d7a109de"
                          : "1px solid #bd3ae9",
                      backgroundColor:
                        item.type === "commit"
                          ? "rgba(255,229,201,0.65)"
                          : "rgba(237,214,255,0.65)",
                    }}
                  />
                </Box>
                <Box className={styles.column} sx={{ width: "10%" }}>
                  <Typography sx={{ color: "#1565c0" }}>#</Typography>{" "}
                  {item.sha.slice(0, 7)}
                </Box>
                <Box className={styles.column} sx={{ width: "45%" }}>
                  <GitLogo /> {item.message}
                </Box>
                <Box className={styles.column} sx={{ width: "15%" }}>
                  <CalendarLogo color="#1565c0" />
                  {dayjs(item.date).format("DD/MM")}
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
