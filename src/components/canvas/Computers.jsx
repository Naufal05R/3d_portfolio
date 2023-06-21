import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./mockup_device/scene.gltf');

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='white'
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : isTablet ? 6 : 8}
        position={isMobile ? [0, -2.5, 0.15] : [0, -3.25, 0.15]}
        rotation={[0, 1.75, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia('(max-width: 425px)');
    const mediaQueryTablet = window.matchMedia('(max-width: 1024px)');

    setIsMobile(mediaQueryMobile.matches);
    setIsTablet(mediaQueryTablet.matches);

    const handleMediaQueryMobileChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleMediaQueryTabletChange = (event) => {
      setIsTablet(event.matches);
    };

    mediaQueryMobile.addEventListener('change', handleMediaQueryMobileChange);
    mediaQueryTablet.addEventListener('change', handleMediaQueryTabletChange);

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaQueryMobileChange);
      mediaQueryTablet.removeEventListener('change', handleMediaQueryTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
