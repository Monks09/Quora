import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  let user = useSelector((data) => {
    return data.loggedInUser;
  });

  return (
    <div className={styles.Navbar}>
      <div className={styles.navLeft}>
        <Link to="/">
          <img
            className={styles.quoraLogo}
            src="navbar-icons/quora-logo.svg"
            alt="logo"
          />
        </Link>
        <Link to="/">
          <img
            className={styles.routeIcons}
            src="navbar-icons/home-icon.svg"
            alt="home"
          />
        </Link>
        <Link to="/following">
          <img
            className={styles.routeIcons}
            src="navbar-icons/following-icon.svg"
            alt="following"
          />
        </Link>
        <Link to="/answer">
          <img
            className={styles.routeIcons}
            src="navbar-icons/answer-icon.svg"
            alt="answer"
          />
        </Link>
        <Link>
          <img
            className={styles.routeIcons}
            src="navbar-icons/spaces-icon.svg"
            alt="spaces"
          />
        </Link>
        <Link>
          <img
            className={styles.routeIcons}
            src="navbar-icons/notifications-icon.svg"
            alt="notifications"
          />
        </Link>
      </div>
      <div className={styles.navRight}>
        <input
          type="text"
          name="searchBox"
          id={styles.searchBox}
          placeholder="Search Quora"
        />
        <button id={styles.quora_plus_button}>Try Quora+</button>
        <img
          className={styles.userImage}
          src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
          alt="user-pic"
        />
        <img
          src="navbar-icons/language-icon.svg"
          alt="language"
          className={styles.routeIcons}
        />
        <button id={styles.add_question_button}>Add question</button>
      </div>
    </div>
  );
}

export default Navbar;
