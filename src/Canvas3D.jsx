import { Canvas } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  Environment,
  Edges,
} from "@react-three/drei";
import Model3D from "./Model3D";
import { useControls } from "leva";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Canvas3D() {
  const pointerRef = useRef();

  // ********** START: Leva GUI **********

  // const options = {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: 0, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // };

  // const position = useControls("position", options);

  // ********** END: Leva GUI **********

  const handleZoom = () => {
    console.log("zoom");
  };

  useEffect(() => {
    if (!pointerRef.current) return;

    console.log([pointerRef.current]);

    gsap.to(pointerRef.current.material, {
      opacity: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(pointerRef.current.scale, {
      x: 1.5,
      y: 1.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, [pointerRef.current]);

  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />
      <mesh
        position={[0.7, 0.5, 1]}
        // position={[position.x, position.y, position.z]}
        onClick={handleZoom}
        ref={pointerRef}
      >
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="white" transparent={true} opacity={0.5} />
        <Edges color="red" />
      </mesh>
      <Model3D />
      <OrbitControls />
    </Canvas>
  );
}
