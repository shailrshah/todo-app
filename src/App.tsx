import React from "react";

import { todos } from "Todo/todos";
import { TodoList } from "Todo/TodoList";

const App = (): JSX.Element => (
  <div className="app">
    <TodoList todos={todos} />
  </div>
);

export default App;
