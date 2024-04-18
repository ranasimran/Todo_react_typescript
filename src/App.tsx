import AddTodo from "./Components/addtodo";
import Navbar from "./Components/navbar";
import Todos from "./Components/todos";
import "./App.css"


export default function App() {
  return (
    <main>
      <h2>TODO REACT + TYPESCRIPT</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}
