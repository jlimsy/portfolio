import { Canvas } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import Model3D from "./Model3D";

export default function Canvas3D() {
  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />
      <Model3D />
      <OrbitControls />
    </Canvas>
  );
}
