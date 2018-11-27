import React from "react";
import ReactDom from "react-dom";
import { mount } from "enzyme";
import Provider from "../Provider";
import CommentList from "../CommentList";

it("has comment box heading", () => {
  const wrapper = document.createElement("div");
  ReactDom.render(
    <Provider>
      <CommentList />
    </Provider>,
    wrapper
  );

  expect(wrapper.innerHTML).toContain("Comments:");
});

describe("comment list", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Provider initialState={{ comments: ["first", "second"] }}>
        <CommentList />
      </Provider>
    );
  });
  it("shows the list of comments", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });
  it("shows the comment text", () => {
    expect(wrapped.render().text()).toContain("first");
    expect(wrapped.render().text()).toContain("second");
  });
});
