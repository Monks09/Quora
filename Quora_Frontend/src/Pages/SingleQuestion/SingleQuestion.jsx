import styles from "./SingleQuestion.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedQuestions from "./RelatedQuestions/RelatedQuestions";
import { SiAcademia } from "react-icons/si";
import { AiOutlinePicture } from "react-icons/ai";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Post from "../Home/Post/Post";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  IconButton,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function SingleQuestion() {
  const pathParams = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [answers, setAnswers] = useState([]);

  const [answer, setAnswer] = useState({
    body: "",
  });

  const user = useSelector((store) => {
    return store.loggedInUser;
  });

  const data = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el._id === pathParams.id;
    });
  });
  const ques = data[0];
  console.log(ques);

  const [question, setQuestion] = useState(ques);

  useEffect(() => {
    getAnswers();
  }, [question]);

  const getAnswers = async () => {
    let res = await fetch(
      `http://localhost:8080/questions/${question._id}/getAnswers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    let data = await res.json();
    console.log(data);
    setAnswers(data.answers);
  };

  const handleChange = (e) => {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value,
    });
  };

  const postYourAnswer = async () => {
    // console.log(answer);
    try {
      let res = await fetch(
        `http://localhost:8080/questions/${question._id}/answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(answer),
        }
      );
      let data = await res.json();
      console.log(data);
      getAnswers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.SingleQuestion}>
      <div className={styles.questionDiv}>
        <h2>
          <b>{question.title}</b>
        </h2>
        <div className={styles.buttonsDiv}>
          <div className={styles.leftButtons}>
            <button onClick={onOpen}>Answer</button>
            <button>Follow</button>
            <button>Request</button>
          </div>
          <div className={styles.rightButtons}>
            <button>
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button>
              <i class="fa-regular fa-comment"></i>
            </button>
            <button>
              <i class="fa-solid fa-down-long"></i>
            </button>
            <button>
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
        <div className={styles.innerDiv}>
          <img src={user.avatar} alt="user-avatar" />
          <p>{user.name.split(" ")[0]}, can you answer this question?</p>
          <p>People are searching for an answer to this question.</p>
          <button onClick={onOpen}>Answer</button>
        </div>
        <div className={styles.answers}>
          {question.no_of_answers === 0 ? (
            <div>
              <i class="fa-solid fa-pen"></i>&nbsp;&nbsp;&nbsp;
              <span>
                This question does not have any answers yet. In the meantime we
                have included some related questions and answers below.
              </span>
            </div>
          ) : (
            <div>
              <p>Answers ({answers.length})</p>
              {answers.length > 0 ? (
                answers.map((el) => {
                  return <Post key={el._id} postData={el} />;
                })
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          )}
        </div>
      </div>
      <RelatedQuestions
        topic={question.topic}
        currentQuestionId={question._id}
        setQuestion={setQuestion}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="50px">
            <div className={styles.userDiv}>
              <div>
                <img src={user.avatar} alt="user" />
              </div>
              <div>
                <p>
                  <b>{user.name}</b>
                </p>
                <button>Choose credential &gt;</button>
              </div>
            </div>
            <div className={styles.postTextDiv}>
              <h3>
                <b>{question.title}</b>
              </h3>
              <textarea
                name="body"
                id="body"
                cols="80"
                rows="8"
                placeholder="Write your answer"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={styles.postTabFooter}>
              <div>
                <IconButton
                  aria-label="text"
                  backgroundColor="white"
                  icon={<SiAcademia />}
                />
                <IconButton
                  aria-label="text"
                  backgroundColor="white"
                  icon={<AiOutlinePicture />}
                />
              </div>
              <div>
                <InfoOutlineIcon />
                <button
                  className={styles.postButton}
                  onClick={postYourAnswer}
                  disabled={answer.body === ""}
                >
                  Post
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
