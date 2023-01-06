import Styles from "./NewQuestion.module.css";

export default function NewQuestion() {
  return (
    <div className={Styles.NewQuestion}>
      <div className={Styles.tipsDiv}>
        <h4>Tips on getting good answers quickly</h4>
        <ul>
          <li>Make sure your Question has not been asked already</li>
          <li>Keep your Question short and to the point</li>
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
          placeholder='Start your Question with "What", "How", "Why", etc.'
        />
      </div>
      <div className={Styles.bottomDiv}>
        <button>Cancel</button>
        <button>Add Question</button>
      </div>
    </div>
  );
}
