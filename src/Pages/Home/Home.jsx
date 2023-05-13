import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Create from "../../Components/Home/Create/Create";
import { useDispatch, useSelector } from "react-redux";
import { getContentThunkActionCreator } from "../../Redux/Actions/homeAction";
import Post from "../../Components/Home/Post/Post";
import Sidebar from "../../Components/Home/Sidebar/Sidebar";
import Ads from "../../Components/Home/Ads/Ads";
import { Spinner } from "@chakra-ui/react";

function Home(props) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentThunkActionCreator(page));
    setLoading(false);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  const content = useSelector((data) => {
    return data.content;
  });
  console.log(content);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className={styles.Home}>
      <Sidebar />
      <div className={styles.main}>
        <Create />
        <div className={styles.contentDiv}>
          {content.length > 0 &&
            content.map((el) => {
              return <Post key={el._id} postData={el} />;
            })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
        </div>
      </div>
      <Ads />
    </div>
  );
}

export default Home;
