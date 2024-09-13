import { useEffect } from "react";

import styles from "./app.module.scss";
import { useGetReportsMutation } from "./store/slices/reports/reports";

export function App() {
  const [getReports, { isSuccess, isLoading, data }] = useGetReportsMutation();

  useEffect(() => {
    console.log("isSuccess: ", isSuccess);
  }, [isSuccess]);

  useEffect(() => {
    console.log("isLoading: ", isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  useEffect(() => {
    getReports().unwrap();
  }, []);

  return <div className={styles.app}>Hello world</div>;
}
