import React from "react";
import { Toggle } from "react-toggle-component";
import { Todo } from "./TodoInterface";
import "./styles.css";

interface TodoIslandProps {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

// Individual Todo functional component
export const TodoIsland = ({
  todo,
  index,
  toggleTodo,
  deleteTodo,
}: TodoIslandProps): JSX.Element => {
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
          onToggle={(e) => toggleTodo(index)}
        />

        <button onClick={(e) => deleteTodo(index)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};
