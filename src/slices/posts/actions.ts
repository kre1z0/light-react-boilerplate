import { createAsyncThunk } from "@reduxjs/toolkit";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const fetchPosts = createAsyncThunk("articles/posts", async () => {
  await wait(4000);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
});
