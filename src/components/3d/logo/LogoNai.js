import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import test from './logo.gltf';

function Logo({ ...props }) {
    const group = React.createRef();
    const { nodes, materials } = useGLTF(test);

   useFrame((state) => {
       const t = state.clock.getElapsedTime();
       group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x,  Math.cos(t / 2) / 4 + 0.25 , 1);
       group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y,  Math.sin(t / 4) / 4 , 1);
       group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z,  Math.sin(t / 4) / 4 , 1);
       group.current.position.y = THREE.MathUtils.lerp(group.current.position.y,  (-2 + Math.sin(t)) / 3 , 1);
    });


    return (
        <group ref={group} {...props} dispose={null} >
            <mesh geometry={nodes.logo.geometry} material={materials.white} position={[0, 0, 0]} rotation={[0, 1.2, 0]} />
        </group>
    )
}



export default function LogoNai() {

    return (
        <Canvas
            mode="concurrent"
            style={{height:"100vh"}}
            camera={{ position: [2, 1, -2] , fov: 45 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[27, 2, 0]} />
            <Suspense fallback={null}>
                <Logo />
            </Suspense>
        </Canvas>
    )
}