import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function pad(num, size) {
  let s = String(num);
  while (s.length < size) s = '0' + s;
  return s;
}

export default function Page({ pageNumber, position, rotation }) {
  const meshRef = useRef();

  const fileName = `/pages/page${pad(pageNumber, 3)}.jpg`;
  const texture = useLoader(TextureLoader, fileName);

  useFrame(() => {
    // optional animation later
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[2.5, 3.5, 0.02]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
