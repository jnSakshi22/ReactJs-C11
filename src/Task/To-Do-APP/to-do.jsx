import { useState } from "react";
import "./style.css";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    const newTodo = { title, description };
    setTodos([...todos, newTodo]);
    resetForm();
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = { title, description };
    setTodos(updatedTodos);
    setEditIndex(null);
    resetForm();
  };

  // Rewriting delete function as per your original approach
  const deleteTodo = (todoToDelete) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== todoToDelete));
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  const editTodo = (index) => {
    setTitle(todos[index].title);
    setDescription(todos[index].description);
    setEditIndex(index);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="App">
      <h1>TODO App</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {editIndex !== null ? "Update Todo" : "Add Todo"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div className="todo-actions">
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
