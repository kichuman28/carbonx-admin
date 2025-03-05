import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function CarbonXModel({ modelPath }) {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene) {
      // Clone the scene to prevent memory leaks
      const clonedScene = scene.clone();
      if (ref.current) {
        ref.current.add(clonedScene);
      }
    }

    return () => {
      // Cleanup
      if (ref.current) {
        while (ref.current.children.length) {
          ref.current.remove(ref.current.children[0]);
        }
      }
    };
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      // Smoother rotation
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      // Add slight tilt animation
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group 
      ref={ref}
      scale={2.5}
      position={[0, 0, 0]}
    />
  );
}

// Pre-load the model
useGLTF.preload('/x.glb'); 