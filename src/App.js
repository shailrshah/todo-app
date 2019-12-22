import React, { useState } from "react";

import { Toggle } from "react-toggle-component";
import "./App.css";

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div className="controls">
        <Toggle
          leftBackgroundColor="tomato"
          rightBackgroundColor="green"
          borderColor="black"
          knobColor="white"
          name={"toggle" + index}
          onToggle={e => toggleTodo(index)}
        />
        <button onClick={e => deleteTodo(index)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

const TodoInput = ({ addTodo }) => {
  const [userText, setUserText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!userText) return;
    addTodo(userText);
    setUserText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input"
        placeholder="Do Laundry"
        value={userText}
        onChange={e => setUserText(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todoList, setTodoList] = useState([
    { text: "Research climate change", isCompleted: false },
    { text: "Pick up prescriptions", isCompleted: false },
    { text: "Complete math homework", isCompleted: false }
  ]);

  const addTodo = userText => {
    const todo = { text: userText, isCompleted: false };
    setTodoList([...todoList, todo]);
  };

  const toggleTodo = index => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  const deleteTodo = index => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1 className="heading">Todo List</h1>
        {todoList.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            key={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoInput addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
