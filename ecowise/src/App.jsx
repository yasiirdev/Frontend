import { Outlet } from "react-router";
import "./App.css";
import Footer from "./home/footer";
import Header from "./home/header";
function App() {
  return (
    <>
  <Header />
  <Outlet/>
  <Footer/>
    </>
  );
}

export default App;
