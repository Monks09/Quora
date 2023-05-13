import { Box, Button, Image, Text } from "@chakra-ui/react";

function Followers({ data }) {
  return (
    <div style={{ margin: "20px" }}>
      <Box
        p={"25px"}
        display={"flex"}
        gap={"50px"}
        boxShadow="xl"
        rounded="md"
        bg="white"
        border={"ActiveBorder"}
      >
        <Box>
          <Image
            w={"50px"}
            borderRadius={"25px"}
            src="https://picsum.photos/200"
          ></Image>
        </Box>
        <Box width={"80%"}>
          <Text fontSize={"24px"} fontFamily={"heading"}>
            {data.name}
          </Text>
          <Text fontWeight={"bold"}>{data.followers}</Text>
          <Text fontWeight={"medium"}>{data.titles}</Text>
        </Box>

        <Button>FOLLOW</Button>
      </Box>
    </div>
  );
}

export default Followers;
