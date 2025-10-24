import { Canvas } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Button } from "./components/ui/button";
import { useState, useEffect, useRef } from "react";

import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

function App() {
  return (
    <>
      {/* <header className="h-12">111</header> */}
      <div className="bg-white h-screen w-screen grid grid-cols-[50px_1fr_50px] grid-rows-[50px_1fr_50px]">
        <div className="border border-black overflow-hidden"></div>
        <div className="border border-black overflow-hidden">
          <p className="font-semibold text-6xl transition-transform">PORT-</p>
          {/* <div className="h-full w-full flex items-center justify-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => console.log("hello")}
            >
              About Me
            </Button>
          </div> */}
        </div>
        <div className="border border-black"> </div>{" "}
        <div className="border border-black overflow-hidden">
          <p className="rotate-270 text-7xl translate-y-32 font-serif ">JOEY</p>
        </div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black">
          {" "}
          <p className="rotate-90 text-6xl  -translate-x-1 translate-y-96">
            FOLIO
          </p>
        </div>{" "}
        <div className="border border-black">
          <div className="flex h-full w-full items-center justify-center">
            <i class="hn hn-linkedin"></i>
          </div>
        </div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black">
          <div className="flex h-full w-full items-center justify-center">
            <i className="hn hn-github"></i>
          </div>
        </div>
        <div className="absolute h-screen w-screen ">
          <Canvas>
            <ambientLight />

            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="black" />
            </mesh>

            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
