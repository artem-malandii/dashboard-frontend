import type { FC } from "react";

import type {
  IResponseUsers,
  ResponseFilesData,
} from "../../../store/slices/time-doctor/interfaces/responses.interface";
import styles from "./screenshot-gallery.module.scss";

type Props = {
  responseData: ResponseFilesData;
  usersData: IResponseUsers;
};

export const ScreenshotGallery: FC<Props> = ({ responseData, usersData }) => {
  const sortedData = [...responseData.data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className={styles.screenshotGallery}>
        {sortedData.map((item, index) => (
          <div key={index} className={styles.screenshotItem}>
            <h4>
              {usersData.data.find((user) => user.id === item.userId)?.name ||
                "Unknown user"}
            </h4>
            <img src={item.numbers[0].url} alt={`Screenshot ${index + 1}`} />
            <div className={styles.screenshotDate}>
              {new Date(item.date).toLocaleString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
