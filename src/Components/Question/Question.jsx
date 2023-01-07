import styles from './Question.module.css';

export default function Question({question, no_of_answers, last_followed, followed_by }) {
    return <div className={styles.Question}>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-arrow-down"></i>
        <i class="fa-solid fa-ellipsis"></i>
        <h3>{question}</h3>
        <span>{no_of_answers === 0 ? "No answers yet" : `Answers ${no_of_answers}`}</span>
        <span>Last followed {last_followed}</span>
        <div className={styles.buttonsDiv}>
            <button>Answer</button>
            <button>Follow</button>
            <button>Pass</button>
        </div>
    </div>
}