"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function GeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotate and tilt the mesh based on time and mouse pointer position
  useFrame((state) => {
    if (meshRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      
      // Target rotation maps to mouse pointer coordinates (-1 to 1) + time rotation
      const targetRotationX = state.pointer.y * 0.6 + elapsedTime * 0.15;
      const targetRotationY = state.pointer.x * 0.6 + elapsedTime * 0.15;
      
      // Lerp for fluid dynamic damping movement
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.3}>
        <torusKnotGeometry args={[1, 0.35, 150, 16]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.25}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full bg-transparent" />;
  }

  return (
    <div className="h-full w-full bg-transparent cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        <GeometricShape />
      </Canvas>
    </div>
  );
}
