import React from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { getContentThunkActionCreator } from "../../Redux/Actions/homeAction";
import Create from "../Create/Create";

function Main() {
  const dispatch = useDispatch();

  const content = useSelector((data) => {
    return data.content;
  });

  useEffect(() => {
    dispatch(getContentThunkActionCreator());
  }, []);

  return (
    <div className="main">
      <Create />
      {content.map((el, i) => {
        return (
          <SinglePost
            key={i}
            id={i}
            postid={el._id}
            name={el.author.name}
            logo={el.author.avatar}
            answer={`Answered by ${el.author.name}`}
            topic={el.question.title}
            body={el.body}
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
