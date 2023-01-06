import styles from './Home.module.css';
import { useState } from 'react';
import  Create from '../../Components/Create/Create';
import Popup from '../../Components/Popup/Popup';

export default function Home() {
    const [createPopup, setCreatePopup] = useState(false);

    return <div className={styles.Home}>
        <Create  trigger={createPopup} setTrigger={setCreatePopup} />
        <Popup trigger={createPopup} setTrigger={setCreatePopup} />
    </div>
}