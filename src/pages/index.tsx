// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import { Canvas } from "@react-three/fiber";
// import Box from "@/components/canvas/Box";
// import { OrbitControls, Stars } from "@react-three/drei";
// import Plane from "@/components/canvas/Plane";
// import { Physics } from "@react-three/cannon";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  // console.log(THREE);
  // Scene
  if (typeof window !== "undefined") {
    const scene = new THREE.Scene();

    // RED cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    /**
     * different ways to provide a color
     * 0xff0000
     * '#ff0000'
     * 'red
     */
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    // Sizes
    const sizes = {
      width: 800,
      height: 500,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

    scene.add(camera);

    // Renderer
    const canvas = document.querySelector(".webgl");
    console.log(canvas);
    if (canvas) {
      // not working in next js
      // const renderer = new THREE.WebGLRenderer({
      //   canvas: canvas,
      // });
    }
  }
  return (
    // <div
    //   className="h-[100vh] w-[100vw] relative z-20"
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     position: "relative",
    //     zIndex: 20,
    //   }}
    // >
    //   <div
    //     className="h-full w-full z-10"
    //     style={{
    //       height: "100%",
    //       width: "100%",
    //       // position: "relative",
    //       zIndex: 10,
    //     }}
    //   >
    //     {" "}
    //     Hello World !
    //   </div>
    //   <div
    //     className="h-full w-full absolute top-0 left-0 z-0"
    //     style={{
    //       height: "100%",
    //       width: "100%",
    //       position: "absolute",
    //       zIndex: 0,
    //       top: 0,
    //       left: 0,
    //     }}
    //   >
    //     <Canvas
    //       style={{ width: "100%", height: "100%" }}
    //       camera={{ position: [10, 0, 10], fov: 45 }}
    //       shadows
    //       dpr={[1, 2]}
    //     >
    //       <OrbitControls />
    //       <perspectiveCamera position={[0, 0, 2.5]} />
    //       <Stars />
    //       <ambientLight intensity={0.5} />
    //       <spotLight position={[10, 15, 10]} angle={0.3} />
    //       <Physics>
    //         <Box />
    //         <Plane />
    //       </Physics>
    //     </Canvas>
    //   </div>
    // </div>
    <>
      <canvas className="webgl" id={"webgl"}></canvas>
    </>
  );
};

export default Home;
