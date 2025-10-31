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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedProject.name}</DialogTitle>
              </DialogHeader>
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="h-48 border border-border"
              />
              {selectedProject.description}
              <div className="flex gap-1">
                {selectedProject.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
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
