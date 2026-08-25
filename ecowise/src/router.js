import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Form from "./auth/Form.jsx";
import Main from "./home/main.jsx";
import Registor from "./auth/register.jsx";
import PageNotFound from "./components/errorbounder.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/home", Component: Main },
      { path: "about" },
      {path:"featuer"},
    ]
  },
  { path: "auth", Component: Form },
  { path: "registor", Component: Registor },
  { path: "*", Component: PageNotFound },
]);
