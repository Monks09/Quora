import styles from "./Create.module.css";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";

export default function Create() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.Create}>
      <div>
        <img
          src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
          alt="user-img"
        />
        <button onClick={onOpen}>What do you want to ask or share?</button>
      </div>
      <div>
        <div onClick={onOpen}>
          <i class="fa-regular fa-circle-question"></i> Ask
        </div>
        <div>
          <Link to="/answer">
            <i class="fa-regular fa-pen-to-square"></i> Answer
          </Link>
        </div>
        <div onClick={onOpen}>
          <i class="fa-solid fa-pen"></i> Post
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="line" mt="50px" size="md">
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
                        src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
                        alt="user-pic"
                      />
                      <i class="fa-solid fa-caret-right"></i>
                      <button>Public</button>
                    </div>
                    <input
                      type="text"
                      placeholder='Start your question with "What", "How", "Why", etc.'
                    />
                  </div>
                  <div className={styles.footerDiv}>
                    <button>Cancel</button>
                    <button>Add question</button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
