import { createSlice, nanoid } from "@reduxjs/toolkit";
import { TodoType } from "../../types";

const initialState = {
  todos: [] as Array<TodoType>
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(8),
        todoMessage: action.payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id)
          todo.todoMessage = action.payload.todoMessage;
      });
    }
  }
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
