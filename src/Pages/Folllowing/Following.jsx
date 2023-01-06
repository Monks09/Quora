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
import Sidebar from "../../Component/Following/Sidebar";
import MidFollowingList from "../../Component/Following/MidFollowingList";
import Followers from "../../Component/Following/Followers";
import { Follower } from "../../Api/Url";
import addfollower from "../../Redux/Following/action";
import { useDispatch } from "react-redux";
function Following(props) {
  const [State, setState] = useState([]);
  const dispatch = useDispatch();
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    setwidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", setwidth(window.innerWidth));
    };
  }, [width]);
  useEffect(() => {
    fetch(Follower).then((res) => {
      res.json().then((res) => {
        setState(res);
        addfollower(res, dispatch);
      });
    });
  }, []);
console.log(State)
  return (
    <Grid display={["none", "flex"]} bg={"rgb(241 242 242)"}>
      <GridItem w={"25%"}>
        <Box>
          <Sidebar />
        </Box>
      </GridItem>
      <GridItem w={"50%"} bg={"white"}>
        <MidFollowingList />
        <Text fontSize={"36px"} m={"40px"} mb={"0px"}>
          Discover Spaces
        </Text>
        <Text fontSize={"16px"} ml={"100px"} fontStyle={"oblique"}>
          Spaces you might like
        </Text>
        {State.map((el) => {
              return <Followers data={el}/>;
            })
          }
      </GridItem>
      <GridItem w={"25%"} bg={"blue"}></GridItem>
    </Grid>
  );
}

export default Following;
