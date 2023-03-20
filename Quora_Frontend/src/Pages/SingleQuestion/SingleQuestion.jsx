import styles from "./SingleQuestion.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RelatedQuestions from "./RelatedQuestions/RelatedQuestions";
import { SiAcademia } from "react-icons/si";
import { AiOutlinePicture } from "react-icons/ai";
import { InfoOutlineIcon } from "@chakra-ui/icons";
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

export default function SingleQuestion() {
  const pathParams = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el._id === pathParams.id;
    });
  });
  const question = data[0];
  console.log(question);

  return (
    <div className={styles.SingleQuestion}>
      <div className={styles.questionDiv}>
        <h2>{question.title}</h2>
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
          <img
            src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
            alt="user-avatar"
          />
          <p>Mayank, can you answer this question?</p>
          <p>People are searching for an answer to this question.</p>
          <button onClick={onOpen}>Answer</button>
        </div>
        <div className={styles.answers}>
          {question.no_of_answers == 0 ? (
            <div>
              <i class="fa-solid fa-pen"></i>
              <span>
                This question does not have any answers yet. In the meantime we
                have included some related questions and answers below.
              </span>
            </div>
          ) : (
            <div>
              <p>Answers</p>
              All answers will come here
            </div>
          )}
        </div>
      </div>
      <RelatedQuestions
        topic={question.topic}
        currentQuestionId={question._id}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="50px">
            <div className={styles.userDiv}>
              <div>
                <img
                  src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
                  alt="user"
                />
              </div>
              <div>
                <p>
                  <b>Mayank Sharma</b>
                </p>
                <button>Choose credential &gt;</button>
              </div>
            </div>
            <div className={styles.postTextDiv}>
              <h3>
                <b>{question.title}</b>
              </h3>
              <textarea
                name="postText"
                id="postText"
                cols="80"
                rows="9"
                placeholder="Write your answer"
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
                <button className={styles.postButton}>Post</button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
