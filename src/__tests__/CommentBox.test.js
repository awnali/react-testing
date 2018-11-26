import React from "react";
import ReactDom from "react-dom";
import { shallow, mount } from "enzyme";
import CommentBox from "../CommentBox";

it("has comment box heading", () => {
  const wrapper = document.createElement("div");
  ReactDom.render(<CommentBox />, wrapper);

  expect(wrapper.innerHTML).toContain("Add Comment");
});

it("has textarea field", () => {
  const wrapper = document.createElement("div");
  ReactDom.render(<CommentBox />, wrapper);

  expect(wrapper.innerHTML).toContain("textarea");
});

it("has textarea field - Enzyme", () => {
  const wrapper = shallow(<CommentBox />);

  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("text area", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CommentBox />);
    wrapper.find("textarea").simulate("change", { target: { value: "test" } });
    wrapper.update();
  });
  it("allow user to input value in textarea", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("test");
  });
  it("is submitting the form", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual(""); // clearing the form on submit
  });
});
