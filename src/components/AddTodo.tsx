import { FormEvent, useEffect, useState } from "react";
import {
  addTodo,
  editTodo,
  editedTodoSelector,
  setEditTodo,
  toggleIsEdited
} from "../features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { TodoType } from "../types";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const isEdited = useAppSelector((state) => state.isEdited);

  const todo = useAppSelector(editedTodoSelector);

  const [todoMessage, setTodoMessage] = useState("");

  useEffect(() => {
    if (todo) {
      setTodoMessage(todo.todoMessage);
    }
  }, [isEdited === true]);

  const dispatch = useAppDispatch();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const editTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTodoMessage(input);
    if (todo) {
      dispatch(editTodo({ id: todo?.id, todoMessage: todoMessage }));
      dispatch(setEditTodo(todo?.id));
    }
    dispatch(toggleIsEdited());
  };

  return (
    <form
      onSubmit={isEdited ? editTodoHandler : addTodoHandler}
      className="mt-12 flex space-x-3"
    >
      <input
        type="text"
        className="w-full rounded border border-gray-700 bg-gray-800 px-3 text-lg leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        placeholder="Enter a Todo..."
        value={isEdited ? todoMessage : input}
        onChange={
          isEdited
            ? (e) => setTodoMessage(e.target.value)
            : (e) => setInput(e.target.value)
        }
      />
      <button
        type="submit"
        className="w-40 rounded border-0 bg-indigo-500 py-2 text-lg text-white transition-all focus:outline-none hover:enabled:bg-indigo-700 lg:px-6"
        disabled={!isEdited && input === "" ? true : false}
      >
        {isEdited ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodo;
