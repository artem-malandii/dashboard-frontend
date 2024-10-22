import { Box } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetReportsMutation } from "../../store/slices/reports/reports";
import { CardItem } from "./card-item/card-item";
import styles from "./reports.module.scss";

export function Reports() {
  const [getReports, { data }] = useGetReportsMutation();

  useEffect(() => {
    getReports().unwrap();
  }, []);

  return (
    <Box className={styles.app}>
      <Link to="/">Back</Link>
      <Box className={styles.cardWrapper}>
        {data && data.map((item) => <CardItem key={item.id} report={item} />)}
      </Box>
    </Box>
  );
}
