import { createSlice } from "@reduxjs/toolkit";

import { getThemeFromStorage } from "styles/theme/utils";

import { AppState } from "./types";

export const initialState: AppState = {
  theme: getThemeFromStorage() || "system",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const { reducer, actions } = appSlice;
