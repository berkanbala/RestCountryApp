import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/appRoutes";
import { AppContextProvider } from "./common/context/appContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRoute />
    </AppContextProvider>
  </React.StrictMode>
);
