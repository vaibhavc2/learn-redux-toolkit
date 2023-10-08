import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: todoReducer
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
