import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";

function Main() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:2000/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);
  console.log("adas", state);
  return (
    <div className="main">
      {state?.map((el, i) => {
        return (
          <SinglePost
            key={i}
            name={el.username}
            logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
            answer={`Answered by ${el.username}`}
            topic={el.title}
            body={el.description}
            img={el.image}
            view={el.views}
            vote={el.upvotes}
            comment={el.comments}
          />
        );
      })}
    </div>
  );
}

export default Main;
