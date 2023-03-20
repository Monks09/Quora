import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import "./SinglePost.css";
function SinglePost({
  id,
  postid,
  logo,
  name,
  answer,
  topic,
  body,
  img,
  view,
  date,
  vote,
  comment,
}) {
  const [state, setState] = useState(vote);
  const [input, setInput] = useState(false);

  const handle = () => {
    fetch(`https://kind-gold-dove-belt.cyclic.app/posts/${postid}`, {
      method: "PATCH",
      body: JSON.stringify({
        upvotes: vote + 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState(json.upvotes);
      });
  };
  const change = () => {
    setInput(!input);
  };
  return (
    <div className="SinglePost">
      <div className="SinglePost-head">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <div className="SinglePost-deatail">
          <div>
            <span className="black">{name}</span>
            <span className="follow">Follow</span>
          </div>
          <div>
            {answer} <i class="fa-solid fa-shield"></i> {date}
          </div>
        </div>
      </div>
      <div className="SinglePost-body">
        <div>
          <NavLink to={`/post/${id}`}>
            <h3 className="black">{topic}</h3>
          </NavLink>
          <span>{body}</span>
        </div>
        <img src={img} alt="post-img" width="100%" />
      </div>
      <div className="SinglePost-tail">
        <button onClick={handle}>
          <i class="fa-regular fa-thumbs-up"></i>
          {state}
        </button>
        <button>
          <i class="fa-regular fa-thumbs-down"></i>
        </button>
        <span onClick={change}>
          <i class="fa-regular fa-comment"></i> {comment || 0}
        </span>
        <span>
          <i class="fa-solid fa-retweet"></i> {view}
        </span>
      </div>
      {input ? <Input id={postid} /> : ""}
    </div>
  );
}

export default SinglePost;
