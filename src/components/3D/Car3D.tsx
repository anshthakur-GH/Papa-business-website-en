
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Car3D = ({ scrollPosition = 0 }) => {
  const carRef = useRef<THREE.Group>();
  
  // Since we don't have an actual car model, we'll create a simple car shape with basic geometries
  useFrame((state) => {
    if (!carRef.current) return;
    
    // Rotate car based on scroll and mouse position
    carRef.current.rotation.y = THREE.MathUtils.lerp(
      carRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 10 + scrollPosition * 0.01,
      0.05
    );
    
    carRef.current.rotation.x = THREE.MathUtils.lerp(
      carRef.current.rotation.x,
      (state.mouse.y * Math.PI) / 40,
      0.05
    );

    // Gentle floating animation
    carRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });
  
  return (
    <group ref={carRef}>
      {/* Car body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.5, 0.8, 4]} />
        <meshStandardMaterial color="#101010" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Car cabin/windshield */}
      <mesh position={[0, 0.6, 0.2]} castShadow>
        <boxGeometry args={[2, 0.7, 2]} />
        <meshStandardMaterial color="#151515" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      <Wheel position={[-1, -0.5, 1.3]} />
      <Wheel position={[1, -0.5, 1.3]} />
      <Wheel position={[-1, -0.5, -1.3]} />
      <Wheel position={[1, -0.5, -1.3]} />
      
      {/* Headlights */}
      <mesh position={[-0.8, 0, 2]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.8, 0, 2]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffcc00" emissive="#ffcc00" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Insurance document floating above */}
      <mesh position={[0, 1.5, 0]} rotation={[0, 0, 0]} castShadow>
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Document text (simulated) */}
      <mesh position={[0, 1.5, 0.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.3, 0.2]} />
        <meshStandardMaterial color="#0096ff" />
      </mesh>
      
      <mesh position={[0, 1.3, 0.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[0, 1.1, 0.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Document stamp */}
      <mesh position={[0.5, 0.8, 0.01]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
    </group>
  );
};

const Wheel = ({ position }) => {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]} castShadow>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

export default Car3D;
