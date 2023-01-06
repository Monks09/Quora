import styles from './Create.module.css';

export default function Create({trigger, setTrigger}) {

    return <div className={styles.Create}>
        <div>
            <img src="https://thumbs.dreamstime.com/z/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg" alt="user-img" />
            <input type="text" placeholder='What do you want to ask or share?' onClick={()=> setTrigger(true)}/>
        </div>
        <div>
            <div><i class="fa-regular fa-circle-question"></i> Ask</div>
            <div><i class="fa-regular fa-pen-to-square"></i> Answer</div>
            <div><i class="fa-solid fa-pen"></i> Post</div>
        </div>
    </div>
}