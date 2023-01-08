import styles from './Create.module.css';
import {Link} from 'react-router-dom';

export default function Create({setTrigger, setPopupData}) {
    
    return <div className={styles.Create}>
        <div>
            <img src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512" alt="user-img" />
            <input type="text" placeholder='What do you want to ask or share?' onClick={()=> setTrigger(true)}/>
        </div>
        <div>
            <div onClick={()=>{
                setTrigger(true);
                setPopupData("question");
            }}><i class="fa-regular fa-circle-question"></i> Ask</div>
            <div><Link to='/answer' style={{backgroundColor:"white", color:"black"}}><i class="fa-regular fa-pen-to-square"></i> Answer</Link></div>
            <div onClick={()=>{
                setTrigger(true);
                setPopupData("post");
            }}><i class="fa-solid fa-pen"></i> Post</div>
        </div>
    </div>
}