import { Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export interface CometProps {
    position: THREE.Vector3;
}

const Comets = ({ speed = 6, ...props }) => {
    const comet = useRef<THREE.Mesh>(null!);
    useFrame((index, delta) => {
        comet.current.position.x = comet.current.position.x += 60 * delta;
    });

    return (
        <group {...props}>
            <Trail
                local
                width={24}
                length={6}
                color={new THREE.Color(2, 1, 10)}
                attenuation={(t) => t * t}>
                <mesh ref={comet}>
                    <sphereGeometry args={[1.2]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    );
};

export default Comets;
