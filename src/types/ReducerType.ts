import { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from ".";

export interface ReducerType<T> {
  (state: { todos: Array<TodoType> }, action: PayloadAction<T>): void;
}
