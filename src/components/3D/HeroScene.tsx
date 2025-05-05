
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Car3D from './Car3D';

const HeroScene = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="w-full h-[700px] md:h-screen absolute top-0 left-0 -z-10">
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1} 
          color="#ffffff" 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[-10, 10, 5]}
          intensity={0.5}
          color="#0096ff"
        />
        <spotLight
          position={[0, 10, 0]}
          intensity={0.3}
          color="#d4af37"
          penumbra={1}
          angle={0.5}
        />
        
        <Car3D scrollPosition={scrollY} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
