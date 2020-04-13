import React from 'react';
import { mount } from 'enzyme';
import App from 'App';
import todos from "Todo/todos.json";

describe('App', () => {
  it('renders correctly', () => {
      const component = mount(<App />);
      const TodoList = component.find('TodoList')
      expect(TodoList).toHaveLength(1);
      expect(TodoList.prop('todos')).toBe(todos);
  });
});
