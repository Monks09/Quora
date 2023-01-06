import styles from "./NewPost.module.css";
import { useRef } from "react";

export default function NewPost() {
  const postRef = useRef();

  let addNewPost = () => {
    let post = {
      username: "Mayank Sharma",
      user_desc: "Content Writer",
      title: "",
      description: postRef.current.value,
      date: "today",
      category: "random",
      image: "",
      views: "0",
      upvotes: "0",
      comments: "0",
      shares: "0",
    };

    fetch(` http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.NewPost}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://thumbs.dreamstime.com/z/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
          alt="avatar"
          style={{ height: "40px", borderRadius: "50%" }}
        />
        <div style={{ padding: "10px", borderRadius: "20px" }}>
          <h5>Username</h5>
          <button
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "5px",
              borderRadius: "20px",
              border: "1px solid grey",
            }}
          >
            Choose Credential <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className={styles.NewPostDiv}>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Say something..."
          ref={postRef}
        ></textarea>
      </div>
      <div className={styles.bottomDiv}>
        <div>
          <span>
            <i class="fa-solid fa-a"></i>
          </span>
          <span>
            <i class="fa-regular fa-images"></i>
          </span>
        </div>
        <div>
          <button onClick={addNewPost}>Post</button>
        </div>
      </div>
    </div>
  );
}
