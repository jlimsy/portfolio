import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import Model3D from "./Model3D";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Canvas3D() {
  const [openDialog, setOpenDialog] = useState(false);
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

      <Model3D handleOpenDialog={handleOpenDialog} />
      <Html>
        {openDialog && (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>hello</DialogContent>
          </Dialog>
        )}
      </Html>

      <OrbitControls />
    </Canvas>
  );
}
