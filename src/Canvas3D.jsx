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

import { projects, projectsArray } from "./utils/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function Canvas3D() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const OrbitControlsRef = useRef();

  // ********** START: Leva GUI **********

  // const options = {
  //   x: { value: 0, min: -10, max: 10, step: 0.1 },
  //   y: { value: 0, min: -10, max: 10, step: 0.1 },
  //   z: { value: 0, min: -10, max: 10, step: 0.1 },
  // };

  // const position = useControls("position", options);

  // ********** END: Leva GUI **********

  const handleOpenDialog = (projectId) => {
    const project = projects.find((project) => project.id === projectId);

    if (!project) return;

    setOpenDialog(true);
    setSelectedProject(project);
  };

  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />

      <Model3D handleOpenDialog={handleOpenDialog} ref={OrbitControlsRef} />
      <Html>
        {openDialog && (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="w-fit bg-primary border border-border text-muted font-mono">
              <DialogHeader>
                <DialogTitle>{selectedProject.name}</DialogTitle>
              </DialogHeader>
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="w-48 md:w-96 border border-border"
              />

              <div className="w-48 md:w-96">
                <p> {selectedProject.description}</p>
              </div>

              <div>Skills acquired:</div>

              <div className="flex gap-2">
                {selectedProject.skills.map((skill) => (
                  <Badge className="bg-orange-600 font-bold" key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </Html>

      <OrbitControls ref={OrbitControlsRef} />
    </Canvas>
  );
}
