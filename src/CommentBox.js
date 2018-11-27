import React from "react";
import { connect } from "react-redux";
import {
  saveComment,
  fetchCommentsFromRemote,
  fetchCommentsFromRemoteThunk
} from "./actions/index";
class CommentBox extends React.Component {
  state = {
    comment: ""
  };
  onChangeHandler(e) {
    this.setState({ comment: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
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
          <button
            className="btn"
            style={{ marginLeft: 10 }}
            onClick={this.props.fetchCommentsFromRemoteThunk}
          >
            Fetch remote
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { saveComment, fetchCommentsFromRemote, fetchCommentsFromRemoteThunk }
)(CommentBox);
