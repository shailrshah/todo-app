import React, { useState } from "react";

interface TodoInputProps {
  addTodo: (userText: string) => void
}

// Input functional component allows users to enter a new Todo
export const TodoInput = ({
  addTodo,
}: TodoInputProps): JSX.Element => {
  const [userText, setUserText] = useState("");

  const handleSubmit = (event) => {
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
        onChange={(e) => setUserText(e.target.value)}
      />
    </form>
  );
};
