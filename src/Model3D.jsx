import { VendingMachine } from "./VendingMachine";
import * as THREE from "three";
import { useControls } from "leva";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Edges } from "@react-three/drei";

export default function Model3D() {
  const pointerRef = useRef();
  const { camera } = useThree();

  const handleZoom = () => {
    console.log("zoom");

    const targetPos = new THREE.Vector3();

    if (pointerRef.current) {
      pointerRef.current.updateWorldMatrix(true, false);
      pointerRef.current.getWorldPosition(targetPos);

      console.log(pointerRef.current.getWorldPosition(targetPos));
    }
    const offset = new THREE.Vector3(0, 0, 1); // 2 units in front of object
    const newCamPos = targetPos.clone().add(offset);

    gsap.to(camera.position, {
      x: newCamPos.x,
      y: newCamPos.y,
      z: newCamPos.z,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => camera.lookAt(targetPos),
    });
  };

  useEffect(() => {
    if (!pointerRef.current) return;

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
  }, [pointerRef]);

  return (
    <>
      <VendingMachine scale={2} />
      <mesh
        position={[0.7, 0.5, 1]}
        // position={[position.x, position.y, position.z]}
        onClick={handleZoom}
        ref={pointerRef}
      >
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="white" transparent={true} opacity={0.5} />
        <Edges color="white" />
      </mesh>
    </>
  );
}
