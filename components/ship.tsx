import React, { useRef } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { useGLTF, useTexture, Trail } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import Rig from './rig';

const SpaceShip = (props: ThreeElements['mesh']) => {
    const { nodes, materials } = useGLTF('/Striker.gltf');
    // const materials = useTexture({ map: '/Striker_Blue.png' });

    const spaceship = useRef<THREE.Group>(null!);

    return (
        <Rig>
            <group ref={spaceship} rotation={[0, Math.PI, 0]} dispose={null}>
                <mesh
                    receiveShadow
                    geometry={(nodes['Striker'] as THREE.Mesh).geometry}
                    material={materials.Texture}>
                    {/* <meshStandardMaterial {...materials} /> */}
                </mesh>
            </group>
        </Rig>
    );
};

useGLTF.preload('/Striker.gltf');

export default SpaceShip;
