import {
  PayloadAction,
  createSelector,
  createSlice,
  nanoid
} from "@reduxjs/toolkit";
import { EditTodoObjectType, TodoType } from "../../types";
import { RootState } from "../../app/store";

const initialState = {
  todos: [] as Array<TodoType>,
  isEdited: false
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: nanoid(8),
        todoMessage: action.payload,
        beingEdited: false
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<EditTodoObjectType>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id)
          todo.todoMessage = action.payload.todoMessage;
      });
    },
    toggleIsEdited: (state) => {
      state.isEdited = !state.isEdited;
    },
    setEditTodo: (state, action: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.beingEdited = !todo.beingEdited;
        }
      });
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleIsEdited, setEditTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

const todosSelector = (state: RootState) => state.todos;

export const editedTodoSelector = createSelector([todosSelector], (todos) => {
  const __todo = todos.filter((todo) => todo.beingEdited === true);
  return __todo ? __todo[0] : null;
});
