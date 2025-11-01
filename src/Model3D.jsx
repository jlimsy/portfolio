import { VendingMachine } from "./VendingMachine";
import * as THREE from "three";
import { useControls } from "leva";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { use, useEffect, useRef, useState } from "react";
import { Edges, useTexture } from "@react-three/drei";

export default function Model3D({ ref, handleOpenDialog, handleOpenAboutMe }) {
  const pointerRefs = useRef([]);
  const pointerPositions = [
    [0.73, 0.5, 1],
    [0.73, 0.85, 1],
  ];
  const { camera } = useThree();
  const [initialCamPos, setInitialCamPos] = useState(camera.position.clone());
  const [zoomToScreen, setZoomToScreen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(null);

  useEffect(() => {
    const orbitControls = ref.current;
    const sceneOrigin = new THREE.Vector3(0, 0, 0);

    if (zoomToScreen && zoomIndex !== null && pointerRefs.current[zoomIndex]) {
      const targetMesh = pointerRefs.current[zoomIndex];
      const targetPos = new THREE.Vector3();

      // Get world position of clicked pointer
      targetMesh.updateWorldMatrix(true, false);
      targetMesh.getWorldPosition(targetPos);

      // Offset camera slightly back
      const offset = new THREE.Vector3(0, 0, 0.5);
      const newCamPos = targetPos.clone().add(offset);

      // Animate camera
      gsap.to(camera.position, {
        x: newCamPos.x,
        y: newCamPos.y,
        z: newCamPos.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });

      gsap.to(orbitControls.target, {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });
    } else {
      // Reset camera
      gsap.to(camera.position, {
        x: initialCamPos.x,
        y: initialCamPos.y,
        z: initialCamPos.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });

      gsap.to(orbitControls.target, {
        x: sceneOrigin.x,
        y: sceneOrigin.y,
        z: sceneOrigin.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });
    }
  }, [zoomToScreen, zoomIndex]);

  const handleZoom = (index) => {
    setZoomIndex(index);
    setZoomToScreen((prev) => !prev);
  };
  // pointer animation

  useEffect(() => {
    pointerRefs.current.forEach((mesh) => {
      if (!mesh) return;

      gsap.to(mesh.material, {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(mesh.scale, {
        x: 1.5,
        y: 1.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  // ********** START: Leva GUI **********

  // const options = {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: 0, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // };

  // const position = useControls("position", options);

  // ********** END: Leva GUI **********

  return (
    <>
      <VendingMachine
        scale={2}
        handleOpenDialog={handleOpenDialog}
        handleOpenAboutMe={handleOpenAboutMe}
      />

      {pointerPositions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (pointerRefs.current[i] = el)}
          position={pos}
          onClick={() => handleZoom(i)}
        >
          <circleGeometry args={[0.05, 32]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#EA580C" : "#000000"}
            transparent
            opacity={0.5}
          />
          <Edges color={i % 2 === 0 ? "#EA580C" : "#000000"} />
        </mesh>
      ))}
    </>
  );
}
