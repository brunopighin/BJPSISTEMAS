"use client";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ count = 5000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 12 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.12;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function WireframeShape({
  position,
  rotSpeed,
  color,
  geo,
}: {
  position: [number, number, number];
  rotSpeed: [number, number, number];
  color: string;
  geo: "ico" | "torus" | "oct";
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * rotSpeed[0];
    ref.current.rotation.y = state.clock.elapsedTime * rotSpeed[1];
    ref.current.rotation.z = state.clock.elapsedTime * rotSpeed[2];
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        {geo === "ico" && <icosahedronGeometry args={[1.2, 1]} />}
        {geo === "torus" && <torusGeometry args={[1, 0.35, 8, 24]} />}
        {geo === "oct" && <octahedronGeometry args={[1.1, 0]} />}
        <meshBasicMaterial color={color} wireframe opacity={0.5} transparent />
      </mesh>
    </Float>
  );
}

function CentralTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.09 + pointer.y * 0.25;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.07 + pointer.x * 0.25;
    if (glowRef.current) {
      glowRef.current.rotation.x = meshRef.current.rotation.x;
      glowRef.current.rotation.y = meshRef.current.rotation.y;
    }
  });

  return (
    <Float speed={0.7} rotationIntensity={0.05} floatIntensity={0.35}>
      <mesh ref={meshRef} position={[0, 0, -1]}>
        <torusKnotGeometry args={[1.0, 0.32, 160, 18, 2, 3]} />
        <meshStandardMaterial
          color="#4C1D95"
          emissive="#7C3AED"
          emissiveIntensity={0.7}
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>
      {/* outer glow shell */}
      <mesh ref={glowRef} position={[0, 0, -1]}>
        <torusKnotGeometry args={[1.0, 0.38, 160, 18, 2, 3]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ParticleField />
        <CentralTorusKnot />
        <WireframeShape position={[-4.5, 2.5, -3]} rotSpeed={[0.12, 0.2, 0.05]} color="#7C3AED" geo="ico" />
        <WireframeShape position={[4, -2, -2]} rotSpeed={[0.08, 0.15, 0.1]} color="#2563EB" geo="torus" />
        <WireframeShape position={[0.5, 3.5, -6]} rotSpeed={[0.15, 0.08, 0.12]} color="#06B6D4" geo="oct" />
        <WireframeShape position={[-2, -3, -4]} rotSpeed={[0.06, 0.18, 0.08]} color="#A78BFA" geo="oct" />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#7C3AED" />
        <pointLight position={[-5, -5, 3]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#A78BFA" />
      </Suspense>
    </Canvas>
  );
}
