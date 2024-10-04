import type { FC } from "react";

import styles from "./screenshot-gallery.module.scss";

type ScreenshotMeta = {
  chunkId: string;
  clicks: number;
  movements: number;
  keys: number;
  period: number;
  contentType: string;
  imageSize: number;
  imageMd5: string;
  createdAt: string;
  h: number;
  w: number;
  projectId: string;
  taskId: string;
  screenNumber: number;
  blur: boolean;
};

type Screenshot = {
  number: string;
  mime: string;
  deleted: boolean;
  avgActivity: number;
  meta: ScreenshotMeta;
  url: string;
  urls: {
    original: string;
    small: string;
  };
  entity: string;
};

type DataItem = {
  userId: string;
  date: string;
  deviceId: string;
  numbers: Screenshot[];
};

type ResponseData = {
  data: DataItem[];
  paging: {
    cur: number;
    limit: number;
    totalCount: number;
    nItems: number;
  };
};

type Props = {
  responseData: ResponseData;
};

export const ScreenshotGallery: FC<Props> = ({ responseData }) => {
  const sortedData = [...responseData.data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className={styles.screenshotGallery}>
        {sortedData.map((item, index) => (
          <div key={index} className={styles.screenshotItem}>
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
