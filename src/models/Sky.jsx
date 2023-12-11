import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import skyScene from '../assets/3d/sky.glb';

const Sky = ({isRotating}) => {
    const skyRef = useRef();

    const sky = useGLTF(skyScene);

    useFrame((_, delta) => {
        if (isRotating) skyRef.current.rotation.y += 0.15 * delta;
    })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky