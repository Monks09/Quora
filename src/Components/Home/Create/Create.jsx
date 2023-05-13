import styles from "./Create.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SiAcademia } from "react-icons/si";
import { AiOutlinePicture } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  IconButton,
} from "@chakra-ui/react";
import {
  addNewPostThunkActionCreator,
  addNewQuestionThunkActionCreator,
} from "../../../Redux/Actions/createAction";

export default function Create() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [defaultTabIndex, setDefaultTabIndex] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || null;

  const quesDefault = {
    quesTitle: "",
    quesTopic: "",
  };

  const postDefault = {
    body: "",
    topic: "",
  };

  const [ques, setQues] = useState(quesDefault);

  const [post, setPost] = useState(postDefault);

  useEffect(() => {
    // cleanup function
    return () => {
      setQues(quesDefault);
      setPost(postDefault);
    };
  }, []);

  const handleChange = (e) => {
    setQues({
      ...ques,
      [e.target.name]: e.target.value,
    });
  };

  const addNewQuestion = async () => {
    // console.log(ques);
    let quesData = {
      title: ques.quesTitle,
      topic: ques.quesTopic,
    };
    dispatch(addNewQuestionThunkActionCreator(quesData));
    navigate("/answer");
  };

  const handleChangePost = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const addNewPost = () => {
    // console.log(post);
    dispatch(addNewPostThunkActionCreator(post));
  };

  return (
    <div className={styles.Create}>
      <div>
        <img
          src={user.avatar ? user.avatar : "dummy-avatar.jpeg"}
          alt="user-img"
        />
        <button
          onClick={() => {
            setDefaultTabIndex(0);
            onOpen();
          }}
        >
          What do you want to ask or share?
        </button>
      </div>
      <div>
        <div
          onClick={() => {
            setDefaultTabIndex(0);
            onOpen();
          }}
        >
          <i class="fa-regular fa-circle-question"></i> Ask
        </div>
        <div>
          <Link to="/answer">
            <i class="fa-regular fa-pen-to-square"></i> Answer
          </Link>
        </div>
        <div
          onClick={() => {
            setDefaultTabIndex(1);
            onOpen();
          }}
        >
          <i class="fa-solid fa-pen"></i> Post
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs
              isFitted
              variant="line"
              mt="50px"
              size="md"
              defaultIndex={defaultTabIndex}
            >
              <TabList>
                <Tab>Add Question</Tab>
                <Tab>Create Post</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className={styles.tipsDiv}>
                    <ul>
                      <b>Tips on getting good answers quickly</b>
                      <li>
                        Make sure your question has not been asked already
                      </li>
                      <li>Keep your question short and to the point</li>
                      <li>Double-check grammar and spelling</li>
                    </ul>
                  </div>
                  <div className={styles.writeQuestionDiv}>
                    <div>
                      <img
                        src={user.avatar ? user.avatar : "dummy-avatar.jpeg"}
                        alt="user-pic"
                      />
                      <i class="fa-solid fa-caret-right"></i>
                      <button>Public</button>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="quesTitle"
                        placeholder='Start your question with "What", "How", "Why", etc.'
                        onChange={handleChange}
                      />
                      <select
                        name="quesTopic"
                        id="quesTopic"
                        onChange={handleChange}
                      >
                        <option value="">Select Topic</option>
                        <option value="Science">Science</option>
                        <option value="Health">Health</option>
                        <option value="Movies">Movies</option>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.questionTabFooter}>
                    <button onClick={onClose}>Cancel</button>
                    <button
                      disabled={ques.quesTitle === "" || ques.quesTopic === ""}
                      onClick={addNewQuestion}
                    >
                      Add question
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={styles.userDiv}>
                    <div>
                      <img
                        src={user.avatar ? user.avatar : "dummy-avatar.jpeg"}
                        alt="user"
                      />
                    </div>
                    <div>
                      <p>
                        <b>{user.name}</b>
                      </p>
                      <button>Choose credential &gt;</button>
                    </div>
                  </div>
                  <div className={styles.postTextDiv}>
                    <textarea
                      name="body"
                      id="body"
                      cols="80"
                      rows="8"
                      placeholder="Say something..."
                      onChange={handleChangePost}
                    ></textarea>
                    <select name="topic" id="topic" onChange={handleChangePost}>
                      <option value="">Select Topic</option>
                      <option value="Science">Science</option>
                      <option value="Health">Health</option>
                      <option value="Movies">Movies</option>
                      <option value="Technology">Technology</option>
                      <option value="Sports">Sports</option>
                    </select>
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
                    <button
                      onClick={addNewPost}
                      disabled={post.body === "" || post.topic === ""}
                    >
                      Post
                    </button>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
