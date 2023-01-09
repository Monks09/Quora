import React, { useState } from "react";
import { user } from "../../../Api/Url";
import {
  FormControl,
  Input,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
function Signin(props) {
  const [input, setInput] = useState({ email: "", name: "", password: "" });
  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });
  const isErrorname = input.name === "";
  const isErroremail = input.email === "";
  const isError = input.password.length < 6;
  console.log(input);
  let width = window.innerWidth;
  console.log(width);
  function CreateAccount() {
    if (
      input.email.length > 0 &&
      input.name.length > 0 &&
      input.password.length > 0
    ) {
      fetch(`${user}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...input,
          login: false,
          following_topics: [],
          following_channels: [],
          answers: [],
          qus: [],
        }),
      }).then((res) => {
        res.JSON().then((res) => {
          <Navigate to={"/login"} />;
        });
      });
    }
  }
  return (
    <Box>
      <Box w={[300, 400, 500]} m={"auto"}>
        <FormControl isInvalid={isErrorname}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder={"ENTER YOUR NAME"}
          />
          {!isErrorname ? (
            ""
          ) : (
            <FormErrorMessage>name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isErroremail}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder={"ENTER YOUR EMAIL"}
          />
          {!isErroremail ? (
            ""
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            placeholder={"ENTER YOUR PASSWORD"}
          />
          {!isError ? "" : <FormErrorMessage>Week Password</FormErrorMessage>}
        </FormControl>
        <Button w={[300, 400, 500]} onClick={CreateAccount}>
          RAGESTER
        </Button>
      </Box>
    </Box>
  );
}

export default Signin;
