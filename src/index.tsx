import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Github } from "./components/github/github";
import { Main } from "./components/main/main";
import { Reports } from "./components/reports/reports";
import { TimeDoctor } from "./components/time-doctor/time-doctor";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>404 Page not found</h1>,
  },
  {
    path: "/report",
    element: <Reports />,
    errorElement: <h1>404 Page not found</h1>,
  },
  {
    path: "/time-doctor",
    element: <TimeDoctor />,
    errorElement: <h1>404 Page not found</h1>,
  },
  {
    path: "/github",
    element: <Github />,
    errorElement: <h1>404 Page not found</h1>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
