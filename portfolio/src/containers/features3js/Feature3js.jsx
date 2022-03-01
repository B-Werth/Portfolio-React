import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion } from "framer-motion";

import { Box, Sphere, Tisch } from "../../components";

import {
  Image,
  Center,
  Flex,
  Spacer,
  Text,
  Container,
  Badge,
  Heading,
  HStack,
  Box as BoxC,
} from "@chakra-ui/react";

import { vuelogo, reactlogo } from "../../assets";

import "./feature3js.css";
import { Suspense, useState } from "react";

import Header from "../header/Header";

const Features3js = () => {
  var [textState, settextState] = useState(0);

  function console() {
    window.console.log(textState);
  }

  return (
    <div>
      <BoxC bg="#0a1c39" w="100%" borderRadius={"full"}>
        <HStack>
          <Header></Header>
          <Canvas className="canvas1">
            <OrbitControls
              enableZoom={false}
              autoRotate="true"
              autoRotateSpeed={2}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Box />
            </Suspense>
          </Canvas>
        </HStack>
      </BoxC>
      <BoxC bg="#0a1c39" w="100%" borderRadius={"full"} h="100px">
        <Center>
          <HStack spacing={"110px"} mt={20}>
            <motion.div whileHover={{ scale: 1.5 }}>
              <Image
                src={vuelogo}
                h={70}
                w={70}
                onPointerOver={() => settextState(textState === 1)}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }}>
              <Image
                src={reactlogo}
                h={70}
                w={70}
                onPointerOver={() => settextState(textState === 2)}
              />
            </motion.div>
          </HStack>
        </Center>
      </BoxC>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tisch position={[0, -50, -150]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Features3js;
