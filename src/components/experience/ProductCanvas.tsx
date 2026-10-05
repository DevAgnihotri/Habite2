import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ProductScene } from "./ProductScene";

export function ProductCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="product-canvas" aria-label="Rotating Ha Bite roasted makhana tube">
      <div className="leaf leaf-a" /><div className="leaf leaf-b" />
      <Suspense fallback={<div className="brand-loader"><span>ह</span><small>LOADING</small></div>}>
        <Canvas shadows dpr={reducedMotion ? 1 : [1, 1.5]} camera={{ position: [0, 0.1, 9], fov: 38 }} gl={{ antialias: true, alpha: true }}>
          <ProductScene reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
}