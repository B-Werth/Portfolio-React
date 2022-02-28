import React from "react";

import { Logo } from "../../components";

import { Container, Box, Flex, HStack } from "@chakra-ui/react";

import { BrowserRouter, Link } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";

import { IoLogoGithub } from "react-icons/io5";

import "./navbar.css";

const navbar = () => {
  return (
    <BrowserRouter>
      <Box
        w="100%"
        h={"5%"}
        p={4}
        color="white"
        position="fixed"
        zIndex={5}
        css={{ backdropFilter: "blur(5px)" }}
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
            <Link to="/posts">Skills</Link>
            <Link to="" onClick={() => scroll.scrollTo(500)}>
              Projekte
            </Link>

            <a href="https://github.com/B-Werth">
              Github <IoLogoGithub />
            </a>
          </HStack>
        </Container>
      </Box>
    </BrowserRouter>
  );
};

export default navbar;
