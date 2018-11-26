import React from "react";

class CommentBox extends React.Component {
  state = {
    comment: ""
  };
  onChangeHandler(e) {
    this.setState({ comment: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.setState({ comment: "" });
  }
  render() {
    return (
      <div>
        <h2>Add Comment</h2>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div>
            <textarea
              value={this.state.comment}
              onChange={e => this.onChangeHandler(e)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
