import styles from "./Answer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "../../Components/Answer/Question/Question";
import { getQuestionsThunkActionCreator } from "../../Redux/Actions/answerThunkAction";

export default function Answer() {
  const dispatch = useDispatch();
  const questions = useSelector((storeData) => {
    return storeData.questions;
  });

  useEffect(() => {
    dispatch(getQuestionsThunkActionCreator());
  }, []);

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
          {questions.length > 0 &&
            questions.map((el) => {
              return (
                <Question
                  key={el._id}
                  id={el._id}
                  question={el.title}
                  no_of_answers={el.no_of_answers}
                />
              );
            })}
        </div>
        <div className={styles.moreDiv}>
          <div>
            More <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className={styles.addTopics}>
          <div>
            <h3>Add 5 topics you know about</h3>
            <p>You'll get better questions if you add more specific topics.</p>
            <button>Add topics</button>
          </div>
          <div>
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.static_about_page.light_mode.GatherAroundAQuestion_LM.png-26-a377318c55ce1d10.png"
              alt="topics"
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h3>Topics you know about</h3>
        <div className={styles.noTopicMessage}>
          <img
            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
            alt="postbox"
          />
          <p>No topics yet</p>
          <p>You'll get better questions if you add more specific topics.</p>
          <button>Add Topics</button>
        </div>
      </div>
    </div>
  );
}
