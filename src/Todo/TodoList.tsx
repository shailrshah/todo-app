import React, { useState } from "react";
import { Todo } from "Todo/TodoInterface";
import { TodoIsland } from "Todo/TodoIsland";
import { TodoInput } from "Todo/TodoInput";
import "Todo/styles.css";

interface TodoListProps {
  todos: Todo[];
}

// Main functional component that allows CRUD operations for Todos
export const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  const [todoList, setTodoList] = useState(todos);

  // Create
  const addTodo: (userText: string) => void = (userText) =>
    setTodoList([
      ...todoList,
      {
        text: userText,
        isCompleted: false,
      },
    ]);

  // Update
  const toggleTodo: (index: number) => void = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  };

  //Delete
  const deleteTodo: (index: number) => void = (index) =>
    setTodoList(todoList.slice(0, index).concat(todoList.slice(index + 1)));

  // Read
  return (
    <div className="todo-list">
      <h1 className="heading">Todo List</h1>
      {todoList.map((todo, index) => (
        <TodoIsland
          todo={todo}
          index={index}
          key={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoInput addTodo={addTodo} />
    </div>
  );
};
