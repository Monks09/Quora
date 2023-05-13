import React from "react";
import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({ postData }) {
  //   console.log(postData);
  const {
    body,
    image,
    author,
    question,
    upvotes,
    downvotes,
    comments,
    shares,
    views,
  } = postData;

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
            <b>
              {question && (
                <Link to={`/post/${postData._id}`}>{question.title}</Link>
              )}
            </b>
          </p>
          <ReadMoreReadLess>{body}</ReadMoreReadLess>
        </div>
        {image && <img src={image} alt="img" />}
      </div>
      <div className={styles.postFooter}>
        <button>
          <i class="fa-regular fa-thumbs-up"></i>&nbsp;&nbsp;
          {upvotes}
        </button>
        <button>
          <i class="fa-regular fa-thumbs-down"></i>&nbsp;&nbsp;
          {downvotes}
        </button>
        <span>
          <i class="fa-regular fa-comment"></i>&nbsp;&nbsp;
          {comments}
        </span>
        <span>
          <i class="fa-solid fa-retweet"></i>&nbsp;&nbsp;
          {shares}
        </span>
      </div>
    </div>
  );
}

export default Post;
