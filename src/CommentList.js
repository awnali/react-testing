import React from "react";
import { connect } from "react-redux";
class CommentList extends React.Component {
  render() {
    return (
      <div>
        <h2>Comments:</h2>
        <ul>
          {this.props.comments &&
            this.props.comments.map((comment, i) => <li key={i}>{comment}</li>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
export default connect(
  mapStateToProps,
  null
)(CommentList);
