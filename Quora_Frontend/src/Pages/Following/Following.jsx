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
import MidFollowingList from "../../Components/Following/MidFollowingList";
import Followers from "../../Components/Following/Followers";
import { Follower } from "../../Api/Url";
import Sidebar from "../../Components/Home/Sidebar/Sidebar";
import Ads from "../../Components/Home/Ads/Ads";

function Following(props) {
  const [State, setState] = useState([]);

  // some width changing logic

  // const [width, setwidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   setwidth(window.innerWidth);
  //   return () => {
  //     window.removeEventListener("resize", setwidth(window.innerWidth));
  //   };
  // }, [width]);

  
  useEffect(() => {
    fetch(Follower).then((res) => {
      res.json().then((res) => {
        setState(res);
      });
    });
  }, []);
  return (
    <Grid display={["none", "flex"]} width="85%" margin="20px auto" gap="20px">
      <GridItem w={"20%"}>
        <Box display={"flex"} justifyContent={"end"}>
          <Sidebar />
        </Box>
      </GridItem>
      <GridItem boxShadow="md" p="6" rounded="md" bg="white">
        <Box>
          <MidFollowingList />
          <Text fontSize={"36px"} m={"40px"} mb={"0px"}>
            Discover Spaces
          </Text>
          <Text fontSize={"16px"} ml={"100px"} fontStyle={"oblique"}>
            Spaces you might like
          </Text>
          {State.length > 0 ? (
            State.map((el) => {
              return <Followers data={el} />;
            })
          ) : (
            <h1>Loading.......</h1>
          )}
        </Box>
      </GridItem>
      <GridItem w={"40%"}>
        <Ads />
      </GridItem>
    </Grid>
  );
}

export default Following;
