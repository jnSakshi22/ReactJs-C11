import { useState } from "react";
import "./style.css";
import EmojiPicker from "emoji-picker-react";
import ConfirmDelete from "../Props-Passing/1. ConfirmDelete";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isConfirmDialog, setISConfirmDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [emojiPicker, setEmojiPicker] = useState(null);

  const addTodo = () => {
    const newTodo = { title, description, emoji: "" };
    setTodos([...todos, newTodo]);
    resetForm();
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = {
      ...updatedTodos[editIndex],
      title,
      description,
    };
    setTodos(updatedTodos);
    setEditIndex(null);
    resetForm();
  };

  const deleteTodo = (todo) => {
    setTodoToDelete(todo);
    setISConfirmDialog(true);
  };

  const confirmDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== todoToDelete));
    setISConfirmDialog(false);
    setTodoToDelete(null);
  };

  const cancelDelete = () => {
    setISConfirmDialog(false);
    setTodoToDelete(null);
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

  const handleEmojiClick = (emojiObject, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].emoji = emojiObject.emoji;
    setTodos(updatedTodos);
    setEmojiPicker(null);
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
              <button onClick={() => setEmojiPicker(index)}>
                {todo.emoji ? (
                  <span style={{ fontSize: "24px" }}>{todo.emoji}</span>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    preserveAspectRatio="xMidYMid meet"
                    className="x23j0i4 xd7y6wv"
                    version="1.1"
                    x="0px"
                    y="0px"
                  >
                    <title>smiley</title>
                    <path
                      fill="currentColor"
                      d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
                    ></path>
                  </svg>
                )}
              </button>
              {emojiPicker === index && (
                <EmojiPicker
                  style={{ position: "absolute" }}
                  onEmojiClick={(emojiObject) =>
                    handleEmojiClick(emojiObject, index)
                  }
                />
              )}
            </div>
            {isConfirmDialog && (
              <ConfirmDelete
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
                title={todo.title}
              />
            )}
          </li>
        ))}
      </ul>

      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={cancelDelete}
        contentLabel="Confirm Delete"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this todo?</p>
        <div className="modal-actions">
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      </Modal> */}
    </div>
  );
};

export default ToDoApp;
