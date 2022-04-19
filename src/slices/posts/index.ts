import { createSlice } from "@reduxjs/toolkit";

import { fetchPosts } from "./actions";

import { PostsState } from "./types";

export const initialState: PostsState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErrors = false;
    });

    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
   
  },
});

export const { reducer } = postsSlice;
