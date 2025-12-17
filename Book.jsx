import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Book({ position = [0, 0, 0], color = '#8b5a2b' }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.2, 1.8, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
