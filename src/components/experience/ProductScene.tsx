import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { SnackTube } from "./SnackTube";

export function ProductScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 8, 7]} intensity={2.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-4, 2, 4]} intensity={12} color="#ffe8ae" />
      <Environment>
        <Lightformer intensity={3} position={[0, 6, 2]} scale={[8, 4, 1]} />
        <Lightformer intensity={2} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>
      <SnackTube reducedMotion={reducedMotion} />
      <ContactShadows position={[0, -2.75, 0]} opacity={0.26} scale={8} blur={2.8} far={5} resolution={512} />
    </>
  );
}