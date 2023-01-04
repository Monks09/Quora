import React from "react";

import "../SinglePost.css";

function SinglePost({
  logo,
  name,
  answer,
  topic,
  body,
  img,
  view,
  vote,
  comment,
}) {
  console.log("yes");
  return (
    <div className="SinglePost">
      <div className="SinglePost-head">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <div className="SinglePost-deatail">
          <div>
            <span className="black">{name}</span>
            <span className="follow">Follow</span>
          </div>
          <div>{answer}</div>
        </div>
      </div>
      <div className="SinglePost-body">
        <div>
          <h3 className="black">{topic}</h3>
          <span>{body}</span>
        </div>
        <img src={img} alt="post-img" width="100%" />
      </div>
      <div className="SinglePost-tail">
        <button>👍 {vote}</button>
        <button>👎</button>
        <span>view {view}</span>
        <span>comments {comment}</span>
      </div>
    </div>
  );
}

export default SinglePost;
