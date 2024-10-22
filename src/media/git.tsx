export const GitLogo = ({
  width = 20,
  height = 20,
  color = "#1565c0",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    id="git"
    width={width}
    height={height}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <path d="M23.21 11.29 12.71.79a1 1 0 0 0-1.41 0L.79 11.29a1 1 0 0 0 0 1.41l10.5 10.5a1 1 0 0 0 1.41 0l10.5-10.5a1 1 0 0 0 0-1.41ZM8.6 3.6l2.34 2.34M12 8.5v7" />
      <circle cx="12" cy="7" r="1.5" />
      <circle cx="17" cy="12" r="1.5" />
      <circle cx="12" cy="17" r="1.5" />
      <path d="m13.05 8.07 2.88 2.88" />
    </g>
  </svg>
);
