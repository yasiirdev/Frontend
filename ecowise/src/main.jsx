import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "../src/routers/router";
import "./index.css";
import  Store  from "./state/Store";
import { Provider } from "react-redux";


const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
