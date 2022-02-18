import React from "react";

import { Logo } from "../../components";

import { Container, Box, Flex, Text, HStack } from "@chakra-ui/react";

const navbar = () => {
  return (
    <div>
      <Box
        w="100%"
        h={"5%"}
        p={4}
        color="white"
        position="fixed"
        zIndex={5}
        css={{ backdropFilter: "blur(10px)" }}
        bg={"#06122340"}
      >
        <Container display="flex" p={3}>
          <Flex align="center" mr={5}>
            <Logo></Logo>
          </Flex>

          <HStack ml={50} spacing="50" display="flex" align={"center"}>
            <Text>Projekte</Text>
            <Text>Posts</Text>
            <Text>Github</Text>
            <Text>jojo</Text>
          </HStack>
        </Container>
      </Box>
    </div>
  );
};

export default navbar;
