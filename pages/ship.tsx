import { Trail, useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import Rig from './rig';

const SpaceShip = (props: ThreeElements['mesh']) => {
    const { nodes, materials } = useGLTF('/Striker.gltf');
    // const materials = useTexture({ map: '/Striker_Blue.png' });

    const spaceship = useRef<THREE.Group>(null!);

    return (
        <Rig>
            <Trail
                local={false}
                length={20}
                decay={1}
                attenuation={(t) => t * t}
            >
                <group
                    ref={spaceship}
                    rotation={[0, Math.PI, 0]}
                    dispose={null}
                >
                    <mesh
                        receiveShadow
                        geometry={(nodes['Striker'] as THREE.Mesh).geometry}
                        material={materials.Texture}
                    >
                        {/* <meshStandardMaterial {...materials} /> */}
                    </mesh>
                </group>
            </Trail>
        </Rig>
    );
};

useGLTF.preload('/Striker.gltf');

export default SpaceShip;
