import { useState } from "react";
import "./App.css";
import Form from "../components/Form";
import ReactState from "../components/ReactState";
import Nav from "../components/Nav";

function App() {
  const [todos, setTodos] = useState([{ text: "Ini adalah contoh kegiatan" }]);

  // membuat function untuk menambah kegiatan
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // membuat function untuk memberi tanda pada kegiatan yang telah dilakukan
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // membuat function untuk menghapus kegiatan
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <Nav />
      <Form addTodo={addTodo} />
      {todos.map((todo, index) => (
        <div className="card p-2 ">
          <ReactState
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
