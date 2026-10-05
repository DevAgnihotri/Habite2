import { useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { productTextures } from "@/lib/productTextures";
import { STORY_PROGRESS_EVENT } from "@/hooks/useScrollStory";
import { useFrame } from "@react-three/fiber";

export function SnackTube({ reducedMotion }: { reducedMotion: boolean }) {
  if (productTextures.front && productTextures.back) {
    return <TexturedSnackTube reducedMotion={reducedMotion} />;
  }

  return <FallbackSnackTube reducedMotion={reducedMotion} />;
}

function TexturedSnackTube({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const textures = useTexture([productTextures.front, productTextures.back]);
  const front = textures[0];
  const back = textures[1];

  if (!front || !back) return null;

  useMemo(() => {
    [front, back].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.anisotropy = 4;
    });
  }, [front, back]);

  useEffect(() => {
    const update = (event: Event) => {
      progress.current = (event as CustomEvent<number>).detail;
    };
    window.addEventListener(STORY_PROGRESS_EVENT, update);
    return () => window.removeEventListener(STORY_PROGRESS_EVENT, update);
  }, []);

  useFrame((_, rawDelta) => {
    const node = group.current;
    if (!node || reducedMotion) return;
    const dt = Math.min(rawDelta, 0.05);
    const p = progress.current;
    const targetRotation = p < 0.5 ? p * Math.PI * 2 : Math.PI + (p - 0.5) * Math.PI * 2;
    const targetScale = p < 0.32 ? 1 + p * 1.25 : p < 0.58 ? 1.4 : 1.4 - (p - 0.58) * 0.72;
    const targetY = p > 0.18 && p < 0.48 ? -0.45 : 0;
    const ease = 1 - Math.exp(-8 * dt);
    node.rotation.y += (targetRotation - node.rotation.y) * ease;
    node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), ease);
    node.position.y += (targetY - node.position.y) * ease;
  });

  return (
    <group ref={group} rotation={[0.04, -0.08, -0.025]}>
      <mesh castShadow>
        <cylinderGeometry args={[1.48, 1.48, 4.95, 72, 1, true, -Math.PI / 2, Math.PI]} />
        <meshStandardMaterial map={front} roughness={0.68} metalness={0.02} side={THREE.DoubleSide} />
      </mesh>
      <mesh castShadow>
        <cylinderGeometry args={[1.48, 1.48, 4.95, 72, 1, true, Math.PI / 2, Math.PI]} />
        <meshStandardMaterial map={back} roughness={0.68} metalness={0.02} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 2.53, 0]} castShadow>
        <cylinderGeometry args={[1.54, 1.54, 0.2, 72]} />
        <meshStandardMaterial color="#17451f" roughness={0.28} metalness={0.35} />
      </mesh>
      <mesh position={[0, 2.65, 0]} castShadow>
        <cylinderGeometry args={[1.43, 1.48, 0.06, 72]} />
        <meshStandardMaterial color="#285d31" roughness={0.22} metalness={0.35} />
      </mesh>
      <mesh position={[0, -2.54, 0]} castShadow>
        <cylinderGeometry args={[1.51, 1.51, 0.12, 72]} />
        <meshStandardMaterial color="#b7b0a0" roughness={0.22} metalness={0.78} />
      </mesh>
    </group>
  );
}

function FallbackSnackTube({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const progress = useRef(0);

  useEffect(() => {
    const update = (event: Event) => {
      progress.current = (event as CustomEvent<number>).detail;
    };
    window.addEventListener(STORY_PROGRESS_EVENT, update);
    return () => window.removeEventListener(STORY_PROGRESS_EVENT, update);
  }, []);

  useFrame((_, rawDelta) => {
    const node = group.current;
    if (!node || reducedMotion) return;
    const dt = Math.min(rawDelta, 0.05);
    const targetRotation = progress.current * Math.PI * 2;
    const ease = 1 - Math.exp(-8 * dt);
    node.rotation.y += (targetRotation - node.rotation.y) * ease;
  });

  return (
    <group ref={group} rotation={[0.04, -0.08, -0.025]}>
      <mesh castShadow>
        <cylinderGeometry args={[1.48, 1.48, 4.95, 72]} />
        <meshStandardMaterial color="#d7c58c" roughness={0.68} />
      </mesh>
      <mesh position={[0, 2.53, 0]} castShadow>
        <cylinderGeometry args={[1.54, 1.54, 0.2, 72]} />
        <meshStandardMaterial color="#17451f" roughness={0.28} metalness={0.35} />
      </mesh>
      <mesh position={[0, -2.54, 0]} castShadow>
        <cylinderGeometry args={[1.51, 1.51, 0.12, 72]} />
        <meshStandardMaterial color="#b7b0a0" roughness={0.22} metalness={0.78} />
      </mesh>
    </group>
  );
}