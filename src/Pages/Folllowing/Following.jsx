import React, { useEffect, useState } from "react";
import {  Box,  Flex,  Grid,  GridItem,  Input,  Image,  Button,  Text,} from "@chakra-ui/react";
import Sidebar from "../../Component/Following/Sidebar";
import MidFollowingList from "../../Component/Following/MidFollowingList";
import Followers from "../../Component/Following/Followers";
import { Follower,user } from "../../Api/Url";
import addfollower from "../../Redux/Following/action";
import { useDispatch, useSelector } from "react-redux";
import "../../Component/Following/Sidebar.css"
import Ad from "../../Component/Following/Ad";
import Main from "../../Component/Following/Main";
function Following(props) {
  const [State, setState] = useState([]);
  
  const dispatch = useDispatch();
  const [width, setwidth] = useState(window.innerWidth);
  const [LogedinUser, setLogedinUser] = useState({Followers:0})
  useEffect(() => {
    setwidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", setwidth(window.innerWidth));
    };
  }, [width]);
  useEffect(() => {
    if(State.length==0){
      fetch(Follower).then((res) => {
        res.json().then((res) => {
          setState(res);
          addfollower(res, dispatch);
        });
      });
      fetch(`${user}?Login=true`).then((res)=>{
        res.json().then((res)=>{
            setLogedinUser(res)
        })
    })
    }
    }, []);
console.log(State)
  return (
    <Grid display={["none", "flex"]} bg={"rgb(241 242 242)"}>
      <GridItem w={"25%"}>
        <Box display={'flex'} justifyContent={'end'}>
          <Sidebar />
        </Box>
      </GridItem>
      <GridItem w={"50%"} bg={"white"}>
        {LogedinUser.Followers>0?<Main/>:<Box>
        <MidFollowingList />
        <Text fontSize={"36px"} m={"40px"} mb={"0px"}>
          Discover Spaces
        </Text>
        <Text fontSize={"16px"} ml={"100px"} fontStyle={"oblique"}>
          Spaces you might like
        </Text>
        {State.map((el) => {
          return <Followers data={el} setLogedinUser={setLogedinUser}/>;
        })
      }
      </Box>}
      </GridItem>
      <GridItem w={"25%"}>
        <Ad/>
      </GridItem>
    </Grid>
  );
}

export default Following;
