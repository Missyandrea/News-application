import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../Articles/articleSplice";

export const store = configureStore({
  reducer: {
    articlesState: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
