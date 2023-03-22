import React from "react";
import { useSelector } from "react-redux";
import Post from "../../Pages/Home/Post/Post";
function Main() {
  const data = useSelector((storeData) => {
    return storeData.content;
  });

  return (
    <div className="main">
      {data.length == 0
        ? "....Loading"
        : data.map((el) => {
            return <Post key={el._id} postData={el} />;
          })}
    </div>
  );
}

export default Main;
