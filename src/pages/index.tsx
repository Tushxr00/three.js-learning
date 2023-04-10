import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "@/components/canvas/Box";
import { OrbitControls, Stars } from "@react-three/drei";
import Plane from "@/components/canvas/Plane";
import { Physics } from "@react-three/cannon";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] relative z-20"
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div
        className="h-full w-full z-10"
        style={{
          height: "100%",
          width: "100%",
          // position: "relative",
          zIndex: 10,
        }}
      >
        {" "}
        Hello World !
      </div>
      <div
        className="h-full w-full absolute top-0 left-0 z-0"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      >
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [10, 0, 10], fov: 45 }}
          shadows
          dpr={[1, 2]}
        >
          <OrbitControls />
          <perspectiveCamera position={[0, 0, 2.5]} />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Physics>
            <Box />
            <Plane />
          </Physics>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
