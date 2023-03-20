import { useSelector } from "react-redux";
import styles from "./RelatedQuestions.module.css";

export default function RelatedQuestions({ topic }) {
  const relatedQues = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.topic === topic;
    });
  });

  return (
    <div className={styles.RelatedQuestions}>
      <p>Related Questions</p>
      {relatedQues.map((el, i) => {
        return <p key={i}>{el.title}</p>;
      })}
    </div>
  );
}
