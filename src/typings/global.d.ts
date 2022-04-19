import { store } from "store";

declare global {
  type RootState = ReturnType<typeof store.getState>;

  type Dispatch = typeof store.dispatch;

  type ValueOf<T> = T[keyof T];
}
