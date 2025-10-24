import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      {/* <header className="h-12">111</header> */}
      <div className="bg-white h-screen w-screen grid grid-cols-[50px_1fr_50px] grid-rows-[50px_1fr_50px]">
        <div className="border border-black "></div>
        <div className="border border-black">
          <Button variant="outline">About Me</Button>
        </div>
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black"></div>
        <div className="absolute h-screen w-screen ">
          <Canvas>
            <ambientLight />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="blue" />
            </mesh>

            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
