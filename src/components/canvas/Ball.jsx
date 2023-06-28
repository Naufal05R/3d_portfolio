import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={2.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[1, 2, 0.5]}
        intensity={0.75}
        castShadow
      />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronBufferGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, index }) => {
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * (12 - -12)) + -12);

  useEffect(() => {
    if (!randomValue) {
      setRandomValue(Math.floor(Math.random() * (12 - -12)) + -12);
    }
  }, []);

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={randomValue}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
