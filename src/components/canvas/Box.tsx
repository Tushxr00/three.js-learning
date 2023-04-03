import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxGeometry attach={"geometry"} />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
