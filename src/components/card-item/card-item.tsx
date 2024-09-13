import { Avatar, Box, Link, Typography } from "@mui/material";
import type { FC } from "react";

import { CalendarLogo } from "../../media/calendar";
import { LinkLogo } from "../../media/link";
import type { IGetReportsResponse } from "../../store/slices/reports/interfaces/responses.interface";
import styles from "./card-item.module.scss";

interface ICardItemProp {
  report: IGetReportsResponse;
}

export const CardItem: FC<ICardItemProp> = ({ report }) => {
  console.log(report);

  return (
    <Box className={styles.cardItem}>
      <Box className={styles.header}>
        <Box className={styles.userInfo}>
          <Avatar
            alt={report.reporterName}
            src={report.avatarLink}
            sx={{ width: 65, height: 65 }}
          />
          <Box>
            <Typography fontWeight="bold" fontSize="22px">
              {report.reporterName}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Link
            className={styles.link}
            href={report.reportLink}
            rel="noopener"
            target="_blank"
            fontSize="21px"
          >
            <LinkLogo color="#3a75e9" width={22} height={22} />
            <Typography>Link</Typography>
          </Link>
        </Box>

        <Box className={styles.date}>
          <CalendarLogo />
          <Typography marginTop="3px" fontSize="18px">
            {report.date}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.report}>
        <Typography className={styles.reportText} fontSize={16}>
          {report.report}
        </Typography>
      </Box>
    </Box>
  );
};
