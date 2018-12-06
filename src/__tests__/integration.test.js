import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../App";
import Provider from "../Provider";

let wrapper;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: ["first comment", "second comment", "third comment"]
  });
  wrapper = mount(
    <Provider>
      <App />
    </Provider>
  );
});
afterEach(() => {
  wrapper.unmount();
});
it("comments are saving correctly", done => {
  wrapper
    .find("textarea")
    .simulate("change", { target: { value: "afzaal is writing" } });
  wrapper.update();
  wrapper.find("form").simulate("submit");
  wrapper.update();
  expect(wrapper.find("li").length).toEqual(1);
  done();
});

it("comments are pulling from remote", done => {
  wrapper.find(".btn").simulate("click");

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(3);
    done();
  });
});
