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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Canvas3D() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const OrbitControlsRef = useRef();

  const handleOpenDialog = (projectId) => {
    const project = projects.find((project) => project.id === projectId);

    if (!project) return;

    setOpenDialog(true);
    setSelectedProject(project);
  };

  const handleOpenAboutMe = () => {
    setOpenAboutMe(true);
  };

  return (
    <Canvas>
      <ambientLight />
      <Environment preset="sunset" />

      <Model3D
        handleOpenDialog={handleOpenDialog}
        handleOpenAboutMe={handleOpenAboutMe}
        ref={OrbitControlsRef}
      />
      <Html>
        {openDialog && (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="w-96 bg-primary border border-border text-muted font-mono">
              <DialogHeader>
                <DialogTitle>{selectedProject.name}</DialogTitle>
              </DialogHeader>
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="w-96 border border-border"
              />

              <div className="w-fit">
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

        {openAboutMe && (
          <Dialog open={openAboutMe} onOpenChange={setOpenAboutMe}>
            <DialogContent className="w-96 bg-orange-600 border border-black text-muted font-mono">
              <DialogHeader>
                <DialogTitle>About Me</DialogTitle>
              </DialogHeader>
              <div className="flex gap-4 items-center justify-center">
                <Avatar className="size-32 border border-black ">
                  <AvatarImage src="thumbnail.png " />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-4">
                  <p className="text-xs">
                    Mid-career switcher from cancer scientist to software
                    developer
                  </p>
                  <p className="text-xs">
                    Passion for interactive media and aesthetic web experiences
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </Html>

      <OrbitControls ref={OrbitControlsRef} />
    </Canvas>
  );
}
