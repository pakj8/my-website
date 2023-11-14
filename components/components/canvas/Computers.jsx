import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import A from "@/public/desktop_pc/scene.gltf";

const Computers = () => {
  // const filePath = "./public/desktop_pc/scene.gltf";
  const computer = useGLTF("@/public/desktop_pc/scene.gltf");
  return <div>ters</div>;
};

export default Computers;
