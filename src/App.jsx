import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="layout"
        className="grid grid-cols-3 grid-rows-3 h-screen w-screen  bg-white relative"
      >
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div className="border-1 border-black"></div>
        <div id="canvas" className="h-screen w-screen absolute">
          <Canvas className="h-full w-full">
            <ambientLight />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="red" />
            </mesh>

            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
