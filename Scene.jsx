import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BookSlider from "./BookSlider";   // or BookReader — choose later

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 3D Content */}
      <BookSlider /> 
      {/* If you want the reader instead: <BookReader /> */}

      {/* Mouse Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
