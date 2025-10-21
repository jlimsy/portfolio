import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <div id="layout" className="h-screen w-screen  bg-white">
        <div id="canvas" className="h-screen w-screen">
          <Canvas className="h-full w-full">
            <ambientLight />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="red" />
            </mesh>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
