import React from "react";
import style from "../../Pages/Folllowing/Following.module.css"
import { Box, Image } from "@chakra-ui/react";
function LeftSider({ img, name }) {
  return (
    <Box display={'flex'} flexDirection={'row'} w={'100%'}>
    <Image w={'40px'} h={'40px'} src='https://picsum.photos/200/300' alt="img"/>
      <span>{name}</span>
    </Box>
  );
}

export default LeftSider;