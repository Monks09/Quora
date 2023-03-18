import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Create from "./Create/Create";
import { useDispatch, useSelector } from "react-redux";
import { getContentThunkActionCreator } from "../../Redux/Actions/homeAction";
import Post from "./Post/Post";

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
      <div className={styles.sidebar}>
        <div className={styles.spaces}>+&nbsp;&nbsp;Create Space</div>
        <div className={styles.spaces}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5jAHqAFSW1a6ZQ8pGj3xJnzt96GZbhzxxDc6zGEKNw&s"
            alt="spaces-icon"
          />
          <p> Technology</p>
        </div>
        <div className={styles.spaces}>
          <img
            src="https://media.istockphoto.com/id/1336937059/photo/film-reels-on-black-background-movie-video-and-cinema-prodaction-and-edition-concept.jpg?b=1&s=170667a&w=0&k=20&c=3Y_OD6qSJIP-9DNcNk-yIZ7CrcOJOLpFr2jfWIbegZA="
            alt="spaces-icon"
          />
          <p> Movies</p>
        </div>
        <div className={styles.spaces}>
          <img
            src="https://media.istockphoto.com/id/1413031831/photo/medicine-doctor-holding-red-heart-shape-in-hand-medical-concept-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=QIzCtiV_e_YIyWNejIS2H28jyJDxG-XxNSbCyD6UKHM="
            alt="spaces-icon"
          />
          <p> Health</p>
        </div>
        <div className={styles.spaces}>
          <img
            src="https://t4.ftcdn.net/jpg/00/04/43/79/360_F_4437974_DbE4NRiaoRtUeivMyfPoXZFNdCnYmjPq.jpg"
            alt="spaces-icon"
          />
          <p>Sports</p>
        </div>
        <div className={styles.spaces}>
          <img
            src="https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg"
            alt="spaces-icon"
          />
          <p>Science</p>
        </div>
      </div>
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
      <div className={styles.ads}>
        <img src="https://s0.2mdn.net/simgad/2015040431282907290" alt="ad-1" />
        <img src="https://s0.2mdn.net/simgad/8252587406779141880" alt="ad-2" />
      </div>
    </div>
  );
}

export default Home;
