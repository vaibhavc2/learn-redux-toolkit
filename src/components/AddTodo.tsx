import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="mt-12 flex space-x-3">
      <input
        type="text"
        className="w-full rounded border border-gray-700 bg-gray-800 px-3 text-lg leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-40 rounded border-0 bg-indigo-500 py-2 text-lg text-white focus:outline-none hover:enabled:bg-indigo-600 lg:px-6"
        disabled={input === "" ? true : false}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
