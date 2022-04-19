import { configureStore } from "@reduxjs/toolkit";

import { reducer as posts } from "slices/posts";
import { reducer as app } from "slices/app";

export const store = configureStore({
  reducer: {
    app,
    posts,
  },
  devTools: process.env.NODE_ENV !== "production",
});
