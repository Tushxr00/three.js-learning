import { useBox } from "@react-three/cannon";
import React, { useState } from "react";

const Box = () => {
  // const [ref, api] = useBox(() => ({ mass: 2, position: [0, 0, 0] }));
  const [isRight, setIsRight] = useState(false);
  return (
    <mesh
      // ref={ref as any}
      position={[2, 0, 1]}
      // onClick={() => {
      //   console.log({ isRight });
      //   if (isRight) {
      //     setIsRight(false);
      //     api.velocity.set(2, 2, 2);
      //   } else {
      //     api.velocity.set(2, 2, 2);
      //     setIsRight(true);
      //     // api.velocity.set(-10, -10, 10);
      //   }
      // }}
    >
      <boxGeometry attach={"geometry"} args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
