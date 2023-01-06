import styles from "./NewPost.module.css";

export default function NewPost() {
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
        <textarea name="text" id="" cols="30" rows="10" placeholder="Say something..."></textarea>
      </div>
      <div className={styles.bottomDiv}>
            <div>
                <span><i class="fa-solid fa-a"></i></span>
                <span><i class="fa-regular fa-images"></i></span>
            </div>
            <div>
                <button>Post</button>
            </div>
      </div>
    </div>
  );
}
