import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "@/components/canvas/Box";
import { OrbitControls, Stars } from "@react-three/drei";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </>
  );
};

export default Home;
