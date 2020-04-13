import React from 'react';
import { mount } from 'enzyme';
import { TodoList } from 'Todo/TodoList';

describe('TodoList', () => {
  it('renders correctly', () => {
      const todos = [
        {
          "text": "Foo",
          "isCompleted": false,
        },
        {
          "text": "Bar",
          "isCompleted": false,
        },
      ]
      const component = mount(<TodoList todos={todos} />);
      expect(component.find('h1')).toHaveLength(1);

      expect(component.find('TodoIsland')).toHaveLength(2);
      expect(component.find('TodoIsland').at(0).prop('todo')).toBe(todos[0]);
      expect(component.find('TodoIsland').at(1).prop('todo')).toBe(todos[1]);

      expect(component.find('TodoInput')).toHaveLength(1);
  });
});