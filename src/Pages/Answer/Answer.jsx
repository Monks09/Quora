import styles from "./Answer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import answerThunkActionCreater from "../../Redux/answerThunkAction";
import Question from "../../Components/Question/Question";

export default function Answer() {
  const dispatch = useDispatch();
  const data = useSelector((storeData) => {
    return storeData.answer;
  });

  useEffect(() => {
    dispatch(answerThunkActionCreater(" http://localhost:3000/questions"));
  });

  return (
    <div className={styles.Answer}>
      <div className={styles.left}>
        <h3>Questions</h3>
        <ul>
          <li>Questions for you</li>
          <li>Answer requests</li>
          <li>Drafts</li>
        </ul>
      </div>
      <div className={styles.middle}>
        <div className={styles.heading}>
          <span>
            <i class="fa-solid fa-star"></i>
          </span>
          <p>Questions for you</p>
        </div>
        <div className={styles.questions}>
          {data.map((el) => {
            return <Question
              key={el.question_id}
              question={el.question}
              no_of_answers={el.no_of_answers}
              last_followed={el.last_followed}
              followed_by={el.followed_by}
            />;
          })}
        </div>
      </div>
      <div className={styles.right}>
        <h3>Topics you know about</h3>
        <div className={styles.noTopicMessage}>
            <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="postbox" />
            <p>No topics yet</p>
            <p>You'll get better questions if you add more specific topics.</p>
            <button>Add Topics</button> 
        </div>
      </div>
    </div>
  );
}
