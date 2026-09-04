import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer/menu.js";

 const Store = configureStore({
  reducer: {
    menu: menuReducer,
  }
});

export default Store;