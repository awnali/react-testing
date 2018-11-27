import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../App";
import Provider from "../Provider";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: ["first comment", "second comment"]
  });
});
it("fetch the comments from remote and update dom", done => {
  const wrapped = mount(
    <Provider>
      <App />
    </Provider>
  );
  wrapped.find(".btn").simulate("click");

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
