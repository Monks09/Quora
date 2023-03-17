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
        <input type="text" placeholder="What do you want to ask or share?" />
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
        <div>
          <i class="fa-solid fa-pen"></i> Post
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
