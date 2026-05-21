"use client";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function BrainNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const { nodePositions, linePositions } = useMemo(() => {
    const count = 160;
    const nodePosArr: number[] = [];
    const positions3D: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 2.1 + (Math.random() - 0.5) * 0.4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      nodePosArr.push(x, y, z);
      positions3D.push(new THREE.Vector3(x, y, z));
    }

    const lineVerts: number[] = [];
    for (let i = 0; i < positions3D.length; i++) {
      for (let j = i + 1; j < positions3D.length; j++) {
        if (positions3D[i].distanceTo(positions3D[j]) < 1.35) {
          lineVerts.push(
            positions3D[i].x, positions3D[i].y, positions3D[i].z,
            positions3D[j].x, positions3D[j].y, positions3D[j].z
          );
        }
      }
    }

    return {
      nodePositions: new Float32Array(nodePosArr),
      linePositions: new Float32Array(lineVerts),
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.004;
    groupRef.current.rotation.x += (pointer.y * 0.2 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (pointer.x * 0.05 - groupRef.current.rotation.z) * 0.04;

    if (ring1Ref.current) ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.35;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#7C3AED" transparent opacity={0.25} />
      </lineSegments>

      <Points positions={nodePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#A78BFA"
          size={0.09}
          sizeAttenuation
          depthWrite={false}
          opacity={0.95}
        />
      </Points>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.008, 8, 80]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref} rotation-z={Math.PI / 2.5}>
        <torusGeometry args={[2.2, 0.008, 8, 80]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function BrainCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 52 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <BrainNetwork />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#7C3AED" />
        <pointLight position={[-5, -5, 3]} intensity={0.8} color="#06B6D4" />
      </Suspense>
    </Canvas>
  );
}
