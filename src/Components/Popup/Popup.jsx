import styles from './Popup.module.css';
import { useState } from "react";
import NewPost from '../NewPost/NewPost';
import NewQuestion from '../NewQuestion/NewQuestion';

export default function Popup({ trigger, setTrigger }) {
  const [popupdata, setPopupData] = useState("question");

  return trigger ? (
    <div className={styles.Popup}>
      <i class="fa-solid fa-xmark" onClick={() => setTrigger(false)}></i>
      <div className={styles.linksDiv}>
        <div onClick={() => setPopupData("question")}>Add Question</div>
        <div onClick={() => setPopupData("post")}>Create Post</div>
      </div>
      {popupdata === "question" ? <NewQuestion /> : <NewPost />}
    </div>
  ) : (
    ""
  );
}
