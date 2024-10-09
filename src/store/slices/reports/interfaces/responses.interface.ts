export interface IGetReportsResponse {
  id: string;
  avatarLink: string;
  reportLink: string;
  project: string;
  date: string;
  report: string;
  reporterName: string;
}

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

export type ResponseFilesData = {
  data: DataItem[];
  paging: {
    cur: number;
    limit: number;
    totalCount: number;
    nItems: number;
  };
};
