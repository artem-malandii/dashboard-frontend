import { Box } from "@mui/material";
import { useEffect } from "react";

import styles from "./app.module.scss";
import { CardItem } from "./components/card-item/card-item";
import "./index.css";
import { useGetReportsMutation } from "./store/slices/reports/reports";

export function App() {
  const [getReports, { data }] = useGetReportsMutation();

  useEffect(() => {
    console.log("data:  ", data);
  }, [data]);

  useEffect(() => {
    getReports().unwrap();
  }, []);

  return (
    <Box className={styles.app}>
      <Box className={styles.cardWrapper}>
        {data && data.map((item) => <CardItem key={item.id} report={item} />)}
      </Box>
    </Box>
  );
}
