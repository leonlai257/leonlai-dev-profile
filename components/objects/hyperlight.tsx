import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export interface HyperLightProps {
    meshProps: ThreeElements['mesh'];
    material: {
        color: number;
        emissive: number;
        emissiveIntensity: number;
    };
}

const cylinderGeometry = new THREE.CylinderGeometry(0.02, 0.02, 4, 32);

const HyperLight = (props: HyperLightProps) => {
    const hyperLight = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        hyperLight.current.position.x -= 1.6;
        hyperLight.current.updateMatrix();
        if (hyperLight.current.position.x < -100) {
            hyperLight.current.position.x = 100;
        }
    });

    return (
        <mesh
            {...props.meshProps}
            ref={hyperLight}
            geometry={cylinderGeometry}
            rotation={[0, 0, Math.PI / 2]}
        >
            <meshLambertMaterial attach={'material'} args={[props.material]} />
        </mesh>
    );
};

export default HyperLight;
