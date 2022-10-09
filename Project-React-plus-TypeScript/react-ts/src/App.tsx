
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvider from "./store/todos-context";

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn Typescript'),
  // ];
  

  return (
    <TodoContextProvider>
      <NewTodo  />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
