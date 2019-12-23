import React, { useState } from "react";

import { Toggle } from "react-toggle-component";
import "./App.css";
import todos from "./todos";

// Individual Todo functional component
const Todo = ({ todo, index, toggleTodoInTodoList, deleteTodoFromTodoList }) => {
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
          onToggle={e => toggleTodoInTodoList(index)}
        />
        <button onClick={e => deleteTodoFromTodoList(index)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

// Input functional component allows users to enter a new Todo
const TodoInput = ({ addTodoToTodoList }) => {
  const [userText, setUserText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!userText) return;
    addTodoToTodoList(userText);
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

// Main functional component that allows CRUD operations for Todos
const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  // Create
  const addTodoToTodoList = userText =>
    setTodoList([
      ...todoList,
      {
        text: userText,
        isCompleted: false
      }
    ]);

  // Read
  const renderTodoList = () => (
    <div className="todo-list">
      <h1 className="heading">Todo List</h1>
      {todoList.map((todo, index) => (
        <Todo
          todo={todo}
          index={index}
          key={index}
          toggleTodoInTodoList={toggleTodoInTodoList}
          deleteTodoFromTodoList={deleteTodoFromTodoList}
        />
      ))}
      <TodoInput addTodoToTodoList={addTodoToTodoList} />
    </div>
  );

  // Update
  const toggleTodoInTodoList = index => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  //Delete
  const deleteTodoFromTodoList = index =>
    setTodoList(todoList.slice(0, index).concat(todoList.slice(index + 1)));

  // <TodoList /> will invoke renderTodoList()
  return renderTodoList();
};

const App = () => (
  <div className="app">
    <TodoList todos={todos}/>
  </div>
);

export default App;
