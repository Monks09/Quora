import { Box, Button, Image, Text } from "@chakra-ui/react";
import React ,{useEffect,useState}from "react";
import { useSelector } from "react-redux";

function Followers({data}) {
console.log(data)
  return (
    <div style={{margin:'20px',}}>
          <Box p={"25px"}  display={'flex'} gap={'50px'} border={'ActiveBorder'}>
            <Box>
              <Image
                w={"50px"}
                borderRadius={"25px"}
                src="https://picsum.photos/200"></Image>
            </Box>
            <Box width={'80%'}>
              <Text>{data.name}</Text>
              <Text>{data.followers}</Text>
              <Text>{data.titles}</Text>
            </Box>
            
            <Button>FOLLOW</Button>
          </Box>
    </div>
  );
}

export default Followers;
