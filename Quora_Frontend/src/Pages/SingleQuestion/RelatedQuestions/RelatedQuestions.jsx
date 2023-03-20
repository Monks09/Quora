import { useSelector } from "react-redux";
import styles from "./RelatedQuestions.module.css";
import { Link } from "react-router-dom";

export default function RelatedQuestions({ topic, currentQuestionId }) {
  const relatedQues = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.topic === topic && el._id !== currentQuestionId;
    });
  });

  return (
    <div className={styles.RelatedQuestions}>
      <h3>Related Questions</h3>
      {relatedQues.map((el) => {
        return (
          <div className={styles.questionDiv}>
            <Link to={`/answer/${el._id}`} key={el._id}>
              {el.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
