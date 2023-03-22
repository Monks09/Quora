import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Create from "../../Components/Home/Create/Create";
import { useDispatch, useSelector } from "react-redux";
import { getContentThunkActionCreator } from "../../Redux/Actions/homeAction";
import Post from "../../Components/Home/Post/Post";
import Sidebar from "../../Components/Home/Sidebar/Sidebar";
import Ads from "../../Components/Home/Ads/Ads";

function Home(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentThunkActionCreator());
    setLoading(false);
  }, []);

  const content = useSelector((data) => {
    return data.content;
  });
  console.log(content);

  return (
    <div className={styles.Home}>
      <Sidebar />
      <div className={styles.main}>
        <Create />
        <div className={styles.contentDiv}>
          {content.length > 0 ? (
            content.map((el) => {
              return <Post key={el._id} postData={el} />;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
      <Ads />
    </div>
  );
}

export default Home;
