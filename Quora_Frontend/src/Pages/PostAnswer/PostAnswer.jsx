import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../Components/Home/Post/Post";
import styles from "./PostAnswer.module.css";

function PostAnswer() {
  const { id } = useParams();

  const data = useSelector((storeData) => {
    return storeData.content.filter((el) => {
      return el._id === id;
    });
  });
  const post = data[0];

  return (
    <div className={styles.Answer}>
      <div className={styles.questionDiv}>
        <div className={styles.title}>
          <h3>
            <b>{post.question.title}</b>
          </h3>
        </div>
        <div className={styles.icons}>
          <div>
            <div>
              <i class="fa-solid fa-wifi"></i>&nbsp;
              <span>Follow</span>
            </div>
            <div>
              <i class="fa-solid fa-user-plus"></i>&nbsp;
              <span>Request</span>
            </div>
          </div>
          <div>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-thumbs-down"></i>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px 0" }}>1 Answer</div>
      <Post key={post._id} postData={post} />
    </div>
  );
}

export default PostAnswer;
