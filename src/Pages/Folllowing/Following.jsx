import React from "react";
import LeftSider from "../../Component/Following/LeftSider";
import styles from "../Folllowing/Following.module.css";
import MidTop from "../../Component/Following/MidTop";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Footer from "../../Component/Following/Footer";
import MidFollowingList from "../../Component/Following/MidFollowingList";
function Following(props) {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    setwidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", setwidth(window.innerWidth));
    };
  }, [width]);
  let data = {
    userid: 2,
    username: "Nitesh Lanjewar",
    following_topics: ["Movies", "Health", "Technology"],
    following_channels: [],
  };
  return (
    <Grid display={['none','flex']}>
      <GridItem w={'25%'} bg={"red"}  >
        <Box>
          {data.following_topics.map((el, i) => {
            return <LeftSider name={el} img={"img"} />;
          })}
        </Box>
        <Footer />
      </GridItem>
      <GridItem w={'50%'}>
        <MidFollowingList/>
      </GridItem>
      <GridItem w={'25%'} bg={"blue"}></GridItem>
    </Grid>
  );
}

export default Following;
