import React from "react";
import styles from "./Ads.module.css";

function Ads(props) {
  return (
    <div className={styles.ads}>
      <img src="https://s0.2mdn.net/simgad/2015040431282907290" alt="ad-1" />
      <img src="https://s0.2mdn.net/simgad/8252587406779141880" alt="ad-2" />
    </div>
  );
}

export default Ads;
