import React from "react";
import { mount } from "enzyme";
import { TodoInput } from "Todo/TodoInput";

describe("TodoInput", () => {
  it("renders correctly", () => {
    const component = mount(<TodoInput addTodo={() => {}} />);

    const input = component.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("placeholder")).toBe("Do Laundry");
  });
});
