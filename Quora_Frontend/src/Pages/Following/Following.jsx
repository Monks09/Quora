import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import MidFollowingList from "./MidFollowingList";
import Followers from "./Followers";
import { Follower, user } from "../../Api/Url";
import Sidebar from "../Home/Sidebar/Sidebar";
import Ads from "../Home/Ads/Ads";
import Main from "./Main";
function Following(props) {
  const [State, setState] = useState([]);
  const [width, setwidth] = useState(window.innerWidth);
  const [LogedinUser, setLogedinUser] = useState({ Followers: 0 });
  useEffect(() => {
    setwidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", setwidth(window.innerWidth));
    };
  }, [width]);
  useEffect(() => {
    if (State.length == 0) {
      fetch(Follower).then((res) => {
        res.json().then((res) => {
          setState(res);
        });
      });
      fetch(`${user}?Login=true`).then((res) => {
        res.json().then((res) => {
          setLogedinUser(res);
        });
      });
    }
  }, []);
  return (
    <Grid display={["none", "flex"]} width="85%" margin="20px auto" gap="20px">
      <GridItem w={"20%"}>
        <Box display={"flex"} justifyContent={"end"}>
          <Sidebar />
        </Box>
      </GridItem>
      <GridItem boxShadow="md" p="6" rounded="md" bg="white">
        {LogedinUser.Followers > 0 ? (
          <Main />
        ) : (
          <Box>
            <MidFollowingList />
            <Text fontSize={"36px"} m={"40px"} mb={"0px"}>
              Discover Spaces
            </Text>
            <Text fontSize={"16px"} ml={"100px"} fontStyle={"oblique"}>
              Spaces you might like
            </Text>
            {State.map((el) => {
              return <Followers data={el} setLogedinUser={setLogedinUser} />;
            })}
          </Box>
        )}
      </GridItem>
      <GridItem w={"40%"}>
        <Ads />
      </GridItem>
    </Grid>
  );
}

export default Following;
