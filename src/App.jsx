import { useState, useEffect, useRef } from "react";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import Canvas3D from "./Canvas3D";

function App() {
  return (
    <>
      {/* <header className="h-12">111</header> */}

      <div className="bg-white h-dvh w-screen grid grid-cols-[50px_1fr_50px] grid-rows-[50px_1fr_50px] z-100 overflow-hidden">
        <div className="border border-black overflow-hidden bg-orange-600"></div>
        <div className="border border-black overflow-hidden">
          <p className="font-semibold text-6xl">PORT-</p>
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
        <div className="border border-black bg-orange-600 transition-opacity duration-300 ease-in-out">
          {" "}
        </div>{" "}
        <div className="border border-black overflow-hidden">
          <p className="rotate-270 text-7xl translate-y-32 font-serif font-light">
            JOEY
          </p>
        </div>{" "}
        <div className="border border-black "></div>{" "}
        <div className="border border-black">
          <p className="rotate-90 text-6xl  -translate-x-1 translate-y-96">
            FOLIO
          </p>
        </div>{" "}
        <div className="border border-black bg-orange-600 ">
          <div className="flex h-full w-full items-center justify-center ">
            <a
              href="https://linkedin.com/in/jlimsy"
              target="_blank"
              className="h-full w-full flex items-center justify-center z-100"
            >
              <i className="hn hn-linkedin text-black"></i>
            </a>
          </div>
        </div>{" "}
        <div className="border border-black"></div>{" "}
        <div className="border border-black bg-orange-600">
          <div className="flex h-full w-full items-center justify-center ">
            <a
              href="https://github.com/jlimsy"
              target="_blank"
              className="h-full w-full flex items-center justify-center z-100"
            >
              <i className="hn hn-github text-black"></i>
            </a>
          </div>
        </div>
        <div className="absolute h-screen w-screen z-0">
          <Canvas3D />
        </div>
      </div>
    </>
  );
}

export default App;
