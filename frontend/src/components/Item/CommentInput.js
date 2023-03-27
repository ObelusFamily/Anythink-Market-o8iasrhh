import React, { useState } from "react";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

function CommentInput ({currentUser}) {
  const [ body, setBody] = useState("")

    function createComment(e) {
      e.preventDefault();
      const newBodyObj = {
        body: body,
      }
      fetch(`/comments`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newBodyObj)
      }).then((payload) => {
        mapDispatchToProps(payload);
      })
       setBody({ body: "" })
    }
  

    return (
      <form className="card comment-form m-2" onSubmit={createComment}>
        <div className="card-block">
          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={body}
            onChange={(e) =>{setBody(e.target.value)}}
            rows="3"
          ></textarea>
        </div>
        <div className="card-footer">
          <img
            src={currentUser.image}
            className="user-pic mr-2"
            alt={currentUser.username}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }


export default CommentInput;
