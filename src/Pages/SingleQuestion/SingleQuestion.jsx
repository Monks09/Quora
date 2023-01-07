import styles from "./SingleQuestion.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function SingleQuestion({}) {
  const pathParams = useParams();
  const [question, setQuestion] = useState({});

  const data = useSelector((storeData) => {
    return storeData.answer.filter((el) => {
      return el.id == pathParams.id;
    });
  });

  useEffect(() => {
    setQuestion(data[0]);
  }, []);

  return (
    <div className={styles.SingleQuestion}>
      <div className={styles.questionDiv}>
        <h2>{question.question}</h2>
        <div className={styles.buttonsDiv}>
          <div className={styles.leftButtons}>
            <button>Answer</button>
            <button>Follow</button>
            <button>Request</button>
          </div>
          <div className={styles.rightButtons}>
            <button><i class="fa-solid fa-circle-info"></i></button>
            <button><i class="fa-regular fa-comment"></i></button>
            <button><i class="fa-solid fa-down-long"></i></button>
            <button><i class="fa-solid fa-ellipsis"></i></button>
          </div>
        </div>
        <div className={styles.innerDiv}>
          <img
            src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
            alt="user-avatar"
          />
          <p>Mayank, can you answer this question?</p>
          <p>People are searching for an answer to this question.</p>
          <button>Answer</button>
        </div>
      </div>
    </div>
  );
}
