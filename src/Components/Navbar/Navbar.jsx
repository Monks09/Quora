import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import { logoutUserThunkActionCreator } from "../../Redux/Actions/loginAction";
import { setUserThunkActionCreator } from "../../Redux/Actions/loginAction";

function Navbar(props) {
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.loggedInUser;
  });

  useEffect(() => {
    if (!user) {
      const userData = JSON.parse(localStorage.getItem("user")) || null;
      if (userData) {
        dispatch(setUserThunkActionCreator(userData));
      }
    }
  }, []);

  const logoutUser = () => {
    dispatch(logoutUserThunkActionCreator());
  };

  return (
    user && (
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
          <Popover>
            <PopoverTrigger>
              <img
                className={styles.userImage}
                src={user.avatar ? user.avatar : "dummy-avatar.jpeg"}
                alt="user-pic"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Hi, {user.name}</PopoverHeader>
              <PopoverBody>
                <Button onClick={logoutUser}>Logout</Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <img
            src="navbar-icons/language-icon.svg"
            alt="language"
            className={styles.routeIcons}
          />
          <button id={styles.add_question_button}>Add question</button>
        </div>
      </div>
    )
  );
}

export default Navbar;
