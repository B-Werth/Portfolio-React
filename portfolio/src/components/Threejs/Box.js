import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../assets/react.png";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
