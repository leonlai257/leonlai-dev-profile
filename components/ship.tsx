import { shaderMaterial, useGLTF, useScroll } from '@react-three/drei';
import {
    extend,
    ThreeElements,
    useFrame,
    useLoader,
    ReactThreeFiber,
} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { jetEngineFragment, jetEngineVertex } from '../shaders/jetEngineShader';
import Rig from './rig';

const JetEngineMaterial = shaderMaterial(
    {
        blending: THREE.AdditiveBlending,
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uTextureTiling: 3.2,
        uThrust: 0.8,
    },
    jetEngineVertex,
    jetEngineFragment
);

extend({ JetEngineMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            jetEngineMaterial: ReactThreeFiber.Object3DNode<
                THREE.ShaderMaterial,
                typeof JetEngineMaterial
            >;
        }
    }
}

const JetEngine = (props: ThreeElements['mesh']) => {
    const ref = useRef<THREE.ShaderMaterial>(null!);
    useFrame(({ clock }) => {
        ref.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    const [noiseMap] = useLoader(THREE.TextureLoader, ['/noiseTexture.jpg']);

    noiseMap.wrapT = THREE.RepeatWrapping;
    noiseMap.wrapS = THREE.RepeatWrapping;

    useEffect(() => {
        ref.current.uniforms.uTexture.value = noiseMap;
        ref.current.uniforms.uColor.value = new THREE.Color(4, 0.5, 2.4);
    });

    return (
        <mesh {...props} rotation={[Math.PI / 2, 0, 0]}>
            <coneBufferGeometry args={[0.18, 1, 32]} />
            <jetEngineMaterial ref={ref} />
        </mesh>
    );
};

const SpaceShip = ({ isTraveling }: { isTraveling: boolean }) => {
    const { nodes, materials } = useGLTF('/Striker.gltf');
    const scroll = useScroll();
    const booster = useRef<THREE.Mesh>(null!);
    // const materials = useTexture({ map: '/Striker_Blue.png' });

    const spaceship = useRef<THREE.Group>(null!);

    const [boosterThrust, setThrust] = useState(1.0);

    useFrame(() => {
        const r1 = scroll.range(0 / 2, 1 / 2);
        const thrustStrength =
            1.6 + (r1 <= 0.8 ? r1 * 2.4 : r1 * 2.4 - 1 * (r1 - 0.8));
        setThrust(thrustStrength);
    });

    return (
        <Rig isTraveling={isTraveling}>
            <group ref={spaceship} dispose={null}>
                <mesh
                    receiveShadow
                    rotation={[0, Math.PI, 0]}
                    geometry={(nodes['Striker'] as THREE.Mesh).geometry}
                    material={materials.Texture}>
                    {/* <meshStandardMaterial {...materials} /> */}
                </mesh>
                <group>
                    <group
                        position={[1.14, -0.24, 2.8]}
                        scale={[
                            1 + boosterThrust / 10,
                            1 + boosterThrust / 10,
                            boosterThrust,
                        ]}>
                        <JetEngine />
                    </group>
                    <group
                        position={[-1.14, -0.24, 2.8]}
                        scale={[
                            1 + boosterThrust / 10,
                            1 + boosterThrust / 10,
                            boosterThrust,
                        ]}>
                        <JetEngine />
                    </group>
                    <group
                        position={[0, 0.2, 4]}
                        scale={[
                            1 + boosterThrust / 16,
                            1 + boosterThrust / 16,
                            boosterThrust,
                        ]}>
                        <JetEngine />
                    </group>
                </group>
            </group>
        </Rig>
    );
};

useGLTF.preload('/Striker.gltf');

export default SpaceShip;
