import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const ConstellationBackground = () => {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ] as [number, number, number],
      color: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#f5f5dc",
      size: 0.02 + Math.random() * 0.02
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.08) * 0.03;
      
      // Animate individual nodes
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const time = state.clock.elapsedTime;
          child.position.y += Math.sin(time * 0.5 + index) * 0.001;
          child.position.x += Math.cos(time * 0.3 + index) * 0.0005;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[node.size, 6, 6]} />
          <meshBasicMaterial 
            color={node.color}
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
    </group>
  );
};

const FloatingGrid = () => {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      gridRef.current.position.z = -8 + Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -8]}>
      <planeGeometry args={[20, 12, 20, 12]} />
      <meshBasicMaterial 
        color="#22c55e" 
        transparent 
        opacity={0.05}
        wireframe
      />
    </mesh>
  );
};

export const SciFiBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 5, 10]} intensity={0.4} color="#3b82f6" />
        <pointLight position={[-10, -5, -5]} intensity={0.3} color="#22c55e" />
        
        <ConstellationBackground />
        <FloatingGrid />
      </Canvas>
    </div>
  );
};