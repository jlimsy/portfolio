import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model3D from "./Model3D";

export default function Canvas3D() {
  // ********** START: Leva GUI **********

  // const options = {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: 0, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // };

  // const position = useControls("position", options);

  // ********** END: Leva GUI **********

  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />

      <Model3D />
      <OrbitControls />
    </Canvas>
  );
}
