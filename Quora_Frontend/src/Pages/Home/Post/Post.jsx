import React from "react";
import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";
import styles from "./Post.module.css";

function Post({ postData }) {
  //   console.log(postData);
  const { body, image, author, question } = postData;

  return (
    <div className={styles.Post}>
      <div className={styles.author}>
        <div className={styles.authorImage}>
          <img src={author.avatar} alt="author-pic" />
        </div>
        <div className={styles.authorDetails}>
          <p>{author.name}</p>
          <p>{author.about ? author.about : `Answered by ${author.name}`}</p>
        </div>
      </div>
      <div className={styles.postContent}>
        <div>
          <p>
            <b>{question.title}</b>
          </p>
          <ReadMoreReadLess>{body}</ReadMoreReadLess>
        </div>
        <img src={image} alt="img" />
      </div>
    </div>
  );
}

export default Post;
