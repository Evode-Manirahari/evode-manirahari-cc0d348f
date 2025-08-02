import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const DataLines = () => {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Create multiple data streams with different patterns
  const dataStreams = useMemo(() => {
    const streams = [];
    for (let i = 0; i < 15; i++) {
      const points = [];
      const segments = 50;
      
      for (let j = 0; j < segments; j++) {
        const x = (j / segments - 0.5) * viewport.width * 2;
        const y = Math.sin(j * 0.2 + i * 0.5) * 2 + Math.cos(j * 0.1 + i) * 0.5;
        const z = Math.sin(j * 0.1 + i * 0.3) * 1;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      streams.push({
        points,
        speed: 0.002 + Math.random() * 0.003,
        offset: i * 0.5,
        opacity: 0.3 + Math.random() * 0.4
      });
    }
    return streams;
  }, [viewport.width]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          const stream = dataStreams[index];
          child.position.x = Math.sin(state.clock.elapsedTime * stream.speed + stream.offset) * 2;
          (child.material as THREE.LineBasicMaterial).opacity = 
            stream.opacity * (0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 2 + stream.offset));
        }
      });
    }
  });

  return (
    <group ref={meshRef}>
      {dataStreams.map((stream, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(stream.points);
        return (
          <line key={index}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial 
              attach="material" 
              color={index % 3 === 0 ? "#22c55e" : index % 3 === 1 ? "#3b82f6" : "#f5f5dc"}
              transparent
              opacity={stream.opacity}
            />
          </line>
        );
      })}
    </group>
  );
};

const FloatingNodes = () => {
  const nodesRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: 0.001 + Math.random() * 0.002,
      phase: Math.random() * Math.PI * 2,
      color: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#f5f5dc"
    }));
  }, []);

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.children.forEach((child, index) => {
        const node = nodes[index];
        const time = state.clock.elapsedTime;
        child.position.y += Math.sin(time * node.speed + node.phase) * 0.001;
        child.position.x += Math.cos(time * node.speed * 0.7 + node.phase) * 0.0005;
      });
    }
  });

  return (
    <group ref={nodesRef}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

const Grid = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = -5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    const size = 20;
    const divisions = 20;
    
    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = (i / divisions - 0.5) * size;
      const points = [
        new THREE.Vector3(-size/2, y, 0),
        new THREE.Vector3(size/2, y, 0)
      ];
      lines.push(points);
    }
    
    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = (i / divisions - 0.5) * size;
      const points = [
        new THREE.Vector3(x, -size/2, 0),
        new THREE.Vector3(x, size/2, 0)
      ];
      lines.push(points);
    }
    
    return lines;
  }, []);

  return (
    <group ref={gridRef} position={[0, 0, -8]}>
      {gridLines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={index}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial 
              attach="material" 
              color="#22c55e" 
              transparent 
              opacity={0.1}
            />
          </line>
        );
      })}
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
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22c55e" />
        
        <DataLines />
        <FloatingNodes />
        <Grid />
      </Canvas>
    </div>
  );
};