import { createSlice } from "@reduxjs/toolkit";

const menu = createSlice({
  name: "menu",
  initialState: { menu: "dashboard", mode: "login" },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMenu, setMode } = menu.actions;
export default menu.reducer;
