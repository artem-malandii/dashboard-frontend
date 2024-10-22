export interface IGithubActivityResponse {
  username: string;
  type: "commit" | "pull-request";
  sha: string;
  message: string;
  date: string;
  url: string;
}
