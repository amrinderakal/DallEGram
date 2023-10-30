import React, { Component } from 'react';

class Comment extends Component {
    render() {
      return (
        <div className="submit__comment">
            <textarea aria-label="Add a comment…" placeholder="Add a comment…" className="comment-textarea" autocomplete="off" autocorrect="off"></textarea>
        </div>
        );
      }
}

export default Comment;