import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const ConstellationLines = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, connections } = useMemo(() => {
    // Generate random nodes
    const nodePositions = Array.from({ length: 40 }, () => [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ]);

    // Create connections between nearby nodes
    const connections: number[][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
          Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
          Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
        );
        
        // Connect nodes that are close enough
        if (distance < 4 && Math.random() > 0.3) {
          connections.push([i, j]);
        }
      }
    }

    return { nodes: nodePositions, connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render connection lines */}
      {connections.map(([nodeA, nodeB], index) => {
        const pointA = nodes[nodeA];
        const pointB = nodes[nodeB];
        const positions = new Float32Array([
          pointA[0], pointA[1], pointA[2],
          pointB[0], pointB[1], pointB[2]
        ]);

        return (
          <line key={`line-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color={index % 3 === 0 ? "#22c55e" : index % 3 === 1 ? "#3b82f6" : "#f5f5dc"}
              transparent
              opacity={0.3}
            />
          </line>
        );
      })}

      {/* Render nodes */}
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position as [number, number, number]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial 
            color={index % 3 === 0 ? "#22c55e" : index % 3 === 1 ? "#3b82f6" : "#f5f5dc"}
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
    </group>
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
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22c55e" />
        
        <ConstellationLines />
      </Canvas>
    </div>
  );
};