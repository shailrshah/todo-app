import React from "react";
import { mount } from "enzyme";
import { TodoIsland } from "Todo/TodoIsland";

describe("TodoIsland", () => {
  it("renders correctly", () => {
    const todo = {
        "text": "Foo",
        "isCompleted": false,
    }
    const component = mount(
        <TodoIsland
            todo={todo}
            index={1}
            toggleTodo={() => {}}
            deleteTodo={() => {}}
        />
    );

    expect(component.find('span').at(0).html()).toContain('Foo');
    expect(component.find('ForwardRef(Toggle)')).toHaveLength(1);
    expect(component.find('button')).toHaveLength(1);
  });
});
