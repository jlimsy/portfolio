import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useTexture,
} from "@react-three/drei";
import Model3D from "./Model3D";
import { useRef, useState } from "react";
import * as THREE from "three";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Badge } from "@/Components/ui/badge";

export default function Canvas3D() {
  const [openDialog, setOpenDialog] = useState(false);
  const OrbitControlsRef = useRef();

  // ********** START: Leva GUI **********

  // const options = {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: 0, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // };

  // const position = useControls("position", options);

  // ********** END: Leva GUI **********

  const handleOpenDialog = () => {
    console.log("open dialog");
    setOpenDialog(true);
  };

  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />

      <Model3D handleOpenDialog={handleOpenDialog} ref={OrbitControlsRef} />
      <Html>
        {openDialog && (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Project Name</DialogTitle>
              </DialogHeader>
              <img
                src=""
                alt="Project Screenshot"
                className="h-48 border border-border"
              />
              Project description goes here.
              <div className="flex gap-1">
                <Badge>Skill</Badge>
                <Badge>Skill</Badge>
                <Badge>Skill</Badge>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </Html>

      <OrbitControls ref={OrbitControlsRef} />
    </Canvas>
  );
}
