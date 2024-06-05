import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_EMAIL_SERVICE_ID: string;
      REACT_APP_EMAIL_TEMPLATE_ID: string;
      REACT_APP_EMAIL_USER_ID: string;
    }
  }
}

console.log(process.env);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
