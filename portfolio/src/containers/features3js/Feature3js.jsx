import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Box, Sphere, Tisch } from "../../components";

import { Container, Flex, HStack } from "@chakra-ui/react";

import "./feature3js.css";
import { Suspense } from "react";

import Header from "../header/Header";

const Features3js = () => {
  return (
    <div>
      <HStack>
        <Header></Header>
        <Canvas className="canvas1">
          <OrbitControls
            enableZoom={false}
            autoRotate="true"
            autoRotateSpeed={60}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
      </HStack>
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
