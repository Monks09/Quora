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
      <img
        className={styles.quoraLogo}
        src="navbar-icons/quora-logo.svg"
        alt="logo"
      />
      <Link>
        <img
          className={styles.routeIcons}
          src="navbar-icons/home-icon.svg"
          alt="home"
        />
      </Link>
      <Link>
        <img
          className={styles.routeIcons}
          src="navbar-icons/following-icon.svg"
          alt="following"
        />
      </Link>
      <Link>
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

      <input
        type="text"
        name="searchBox"
        id={styles.searchBox}
        placeholder="Search Quora"
      />
      <button id={styles.quora_plus_button}>Try Quora+</button>
      <img
        className={styles.userImage}
        src="https://i.pinimg.com/236x/39/90/61/3990618993ef1a1d30196fc22f704d22--headshot-photography-men-photography.jpg"
        alt="user-pic"
      />
      <img
        src="navbar-icons/language-icon.svg"
        alt="language"
        className={styles.routeIcons}
      />
      <button id={styles.add_question_button}>Add question</button>
    </div>
  );
}

export default Navbar;
