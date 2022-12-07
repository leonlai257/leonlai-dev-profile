import { useGLTF, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import Rig from './rig';

const SpaceShip = ({ isTraveling }: { isTraveling: boolean }) => {
    const { nodes, materials } = useGLTF('/Striker.gltf');
    const scroll = useScroll();
    // const materials = useTexture({ map: '/Striker_Blue.png' });

    const spaceship = useRef<THREE.Group>(null!);

    return (
        <Rig isTraveling={isTraveling}>
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
