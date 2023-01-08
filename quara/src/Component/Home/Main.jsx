import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
import { succ, req, fail } from "../component/redux/action";
import { store } from "../component/redux/store";
import { useSelector } from "react-redux";

function Main() {
  useEffect(() => {
    store.dispatch(req());
    fetch(`https://kind-gold-dove-belt.cyclic.app/posts`)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(succ(data));
      })
      .catch((err) => store.dispatch(fail()));
  }, []);

  const reduxdata = useSelector((store) => {
    return store;
  });

  return (
    <div className="main">
      {console.log()}
      {reduxdata.isLoading
        ? "Loading..."
        : reduxdata.post[0]?.map((el, i) => {
            return (
              <SinglePost
                key={i}
                id={i}
                postid={el.postid}
                name={el.username}
                logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
                answer={`Answered by ${el.username}`}
                topic={el.title}
                body={el.description}
                img={el.image}
                date={el.date}
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
