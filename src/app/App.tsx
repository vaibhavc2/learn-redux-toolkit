import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

const App = () => {
  return (
    <>
      <h1 className="m-6 text-center text-4xl font-bold">Todo Application</h1>
      <div className="mx-auto flex max-w-2xl flex-col gap-x-2 px-3">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
};

export default App;
