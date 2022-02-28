import React, { useState } from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../assets/react.png";
import texture2 from "../../assets/vuelogo.png";

export default function Box() {
  var textu = texture;
  var textuState = 1;
  var colorMap = useLoader(TextureLoader, textu);

  function changeTexture(textuState) {
    if (textuState === 1) {
      textu = texture;
    }
    if (textuState === 2) {
      textu = texture2;
    }
  }

  return (
    <mesh rotation={[90, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
