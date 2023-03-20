import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../Home/Post/Post";
import SinglePost from "../Home/SinglePost";

function PostAnswer() {
  const { id } = useParams();

  const data = useSelector((storeData) => {
    return storeData.content.filter((el) => {
      return el._id === id;
    });
  });
  const post = data[0];

  return (
    <div className="Answer">
      <div className="Answer-component">
        <div className="title">
          <h3 className="black">{post.question.title}</h3>
          <div className="icon">
            <div>
              <i class="fa-solid fa-wifi"></i>
              Follow 1<i class="fa-solid fa-user-plus"></i> Request
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-thumbs-down"></i>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px 0" }}>1 Answer</div>
        <SinglePost
          name={post.author.name}
          logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          answer={`Answered by ${post.author.name}`}
          postid={post._id}
          body={post.body}
          img={post.image}
          view={post.views}
          vote={post.upvotes}
          comment={post.comments}
        />
      </div>
    </div>
  );
}

export default PostAnswer;
