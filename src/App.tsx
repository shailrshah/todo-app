import React, { useState } from "react";

import { Toggle } from "react-toggle-component";
import "./App.css";
import todos from "./todos.json";


interface Todo {
  text: string,
  isCompleted: boolean,
}

interface TodoProps {
  todo: Todo,
  index: number,
  toggleTodoInTodoList: (index: number) => void,
  deleteTodoFromTodoList: (index: number) => void,
}
// Individual Todo functional component
const Todo = ({ todo, index, toggleTodoInTodoList, deleteTodoFromTodoList }: TodoProps): JSX.Element => {
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
const TodoInput = ({ addTodoToTodoList }: {addTodoToTodoList: (userText: string) => void}): JSX.Element => {
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
const TodoList = ({ todos }: {todos: Todo[]}): JSX.Element => {
  const [todoList, setTodoList] = useState(todos);

  // Create
  const addTodoToTodoList: (userText: string) => void  = userText =>
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
  const toggleTodoInTodoList: (index: number) => void = index => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  //Delete
  const deleteTodoFromTodoList: (index: number) => void = index =>
    setTodoList(todoList.slice(0, index).concat(todoList.slice(index + 1)));

  // <TodoList /> will invoke renderTodoList()
  return renderTodoList();
};

const App = (): JSX.Element => (
  <div className="app">
    <TodoList todos={todos}/>
  </div>
);

export default App;
