import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Form from "../auth/Form.jsx";
import Main from "../home/main.jsx";
import Registor from "../auth/register.jsx";
import PageNotFound from "../components/Error/errorbounder.jsx";
import MainPage from "../components/App/Mainpage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index :true , Component: Main },
    ]
  },
  { path: "auth", Component: Form },
  { path: "registor", Component: Registor },
  { path: "auth/app", Component: MainPage },
  { path: "*", Component: PageNotFound },
]);

export default router;
