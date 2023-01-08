import styles from "./Home.module.css";
import { useState } from "react";
import Create from "../Create/Create";
import Popup from "../Popup/Popup";

export default function Post() {
  const [createPopup, setCreatePopup] = useState(false);
  const [popupdata, setPopupData] = useState("question");

  return (
    <div className={styles.Home}>
      <Create
        trigger={createPopup}
        setTrigger={setCreatePopup}
        popupdata={popupdata}
        setPopupData={setPopupData}
      />
      <Popup
        trigger={createPopup}
        setTrigger={setCreatePopup}
        popupdata={popupdata}
        setPopupData={setPopupData}
      />
    </div>
  );
}
