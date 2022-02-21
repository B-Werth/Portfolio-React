import React from "react";

import { Logo } from "../../components";

import { Container, Box, Flex, HStack } from "@chakra-ui/react";

import { BrowserRouter, Link } from "react-router-dom";

import { Element, animateScroll as scroll } from "react-scroll";

import { IoLogoGithub } from "react-icons/io5";

import "./navbar.css";

const navbar = () => {
  return (
    <div>
      <BrowserRouter>
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
          <Container display="flex" p={3} mt={5}>
            <Flex align="center" mr={5}>
              <Logo></Logo>
            </Flex>

            <HStack
              ml={50}
              spacing="50"
              display="flex"
              align={"center"}
              fontSize="20px"
            >
              <Link to="" onClick={() => scroll.scrollTo(500)}>
                Projekte
              </Link>
              <Link to="/posts">Posts</Link>
              <Link to="/github">
                Github <IoLogoGithub />
              </Link>
            </HStack>
          </Container>
        </Box>
      </BrowserRouter>
      <Element name="test1" className="element">
        test 1
      </Element>
    </div>
  );
};

export default navbar;
