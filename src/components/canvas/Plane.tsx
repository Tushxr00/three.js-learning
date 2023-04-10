import { usePlane } from "@react-three/cannon";
import React from "react";
import * as THREE from "three";

const Plane = () => {
  // const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh
      // ref={ref as any}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <planeGeometry attach={"geometry"} args={[25, 15]} />
      <meshPhongMaterial
        attach="material"
        color="lightblue"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Plane;
