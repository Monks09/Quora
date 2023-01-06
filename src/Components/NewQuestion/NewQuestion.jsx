import Styles from "./NewQuestion.module.css";
import { useRef } from "react";

export default function NewQuestion({ setTrigger }) {
  const questionRef = useRef();

  let addNewQuestion = () => {
    let ques = {
      question: questionRef.current.value,
      no_of_answers: 0,
      last_followed: "10s",
      followed_by: 1,
    };

    fetch(`http://localhost:3000/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(ques),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        // alert('Your question has been posted');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.NewQuestion}>
      <div className={Styles.tipsDiv}>
        <h4>Tips on getting good answers quickly</h4>
        <ul>
          <li>Make sure your question has not been asked already</li>
          <li>Keep your question short and to the point</li>
          <li>Double-check grammar and spelling</li>
        </ul>
      </div>
      <div className={Styles.accessDiv}>
        <img
          src="https://thumbs.dreamstime.com/z/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
          alt="avatar"
          style={{ width: "15px", borderRadius: "50%" }}
        />
        <i class="fa-solid fa-play"></i>
        <select name="access" id="access">
          <option value="public">Public</option>
          <option value="limited">Limited</option>
        </select>
      </div>
      <div className={Styles.NewQuestionDiv}>
        <input
          type="text"
          placeholder='Start your question with "What", "How", "Why", etc.'
          ref={questionRef}
        />
      </div>
      <div className={Styles.bottomDiv}>
        <button
          onClick={() => {
            setTrigger(false);
          }}
        >
          Cancel
        </button>
        <button onClick={addNewQuestion}>Add question</button>
      </div>
    </div>
  );
}
