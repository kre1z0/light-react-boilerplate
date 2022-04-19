import { initialState } from "./";
export const postsSelector = (state: RootState) => state.posts || initialState;
