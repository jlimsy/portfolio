import { VendingMachine } from "./VendingMachine";
import * as THREE from "three";
import { useControls } from "leva";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { use, useEffect, useRef, useState } from "react";
import { Edges, useTexture } from "@react-three/drei";

export default function Model3D({ ref, handleOpenDialog }) {
  const pointerRef = useRef();
  const { camera } = useThree();
  const [initialCamPos, setInitialCamPos] = useState(camera.position.clone());
  const [zoomToScreen, setZoomToScreen] = useState(false);

  useEffect(() => {
    const orbitControls = ref.current;
    const sceneOrigin = new THREE.Vector3(0, 0, 0);

    if (zoomToScreen) {
      const targetPos = new THREE.Vector3();

      if (pointerRef.current) {
        pointerRef.current.updateWorldMatrix(true, false);
        pointerRef.current.getWorldPosition(targetPos);
      }
      const offset = new THREE.Vector3(0, 0, 0.5);
      const newCamPos = targetPos.clone().add(offset);

      gsap.to(camera.position, {
        x: newCamPos.x,
        y: newCamPos.y,
        z: newCamPos.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });

      gsap.to(orbitControls.target, {
        x: newCamPos.x,
        y: newCamPos.y,
        z: newCamPos.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => orbitControls.update(),
      });
    } else {
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
  }, [zoomToScreen]);

  const handleZoom = () => setZoomToScreen((prev) => !prev);

  // pointer animation

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

  // const texture = useTexture(`${import.meta.env.BASE_URL}instagram.png`);

  return (
    <>
      <VendingMachine scale={2} handleOpenDialog={handleOpenDialog} />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh> */}
      <mesh
        position={[0.73, 0.5, 1]}
        // position={[position.x, position.y, position.z]}
        onClick={handleZoom}
        ref={pointerRef}
      >
        <circleGeometry args={[0.05, 32]} />
        <meshStandardMaterial
          color="#EA580C"
          transparent={true}
          opacity={0.5}
        />
        <Edges color="#EA580C" />
      </mesh>
    </>
  );
}
