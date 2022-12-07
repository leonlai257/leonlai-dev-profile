import { Stars, Trail, useScroll } from '@react-three/drei';
import { extend, ThreeElements, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three-stdlib';
import Title from './title';

extend({ EffectComposer, UnrealBloomPass });

interface HyperLightProps {
    meshProps: ThreeElements['mesh'];
    material: {
        color: number;
        emissive: number;
        emissiveIntensity: number;
    };
}

interface CometProps {
    position: THREE.Vector3;
}

const cylinderGeometry = new THREE.CylinderGeometry(0.02, 0.02, 4, 32);

const colors = [
    {
        color: 0x8eb0f5,
        emissive: 0x8eb0f5,
        emissiveIntensity: 1,
    },
    {
        color: 0xb08ef5,
        emissive: 0xb08ef5,
        emissiveIntensity: 1,
    },
];

const HyperLight = (props: HyperLightProps) => {
    const hyperLight = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
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

const Comets = ({ speed = 6, ...props }) => {
    const comet = useRef<THREE.Mesh>(null!);
    useFrame((state, delta) => {
        comet.current.position.x = comet.current.position.x += 60 * delta;
    });

    return (
        <group {...props}>
            <Trail
                local
                width={24}
                length={6}
                color={new THREE.Color(2, 1, 10)}
                attenuation={(t) => t * t}
            >
                <mesh ref={comet}>
                    <sphereGeometry args={[1.2]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    );
};

const Space = () => {
    const { gl } = useThree();
    const composer = useRef() as any;

    const scroll = useScroll();
    const space = useRef<THREE.Group>(null!);
    const welcomeText = useRef(null!);

    let hyperLight: HyperLightProps[] = [];
    const lightCount = 2000;
    const lightTunnelRadius = 100;

    for (let i = 0; i < lightCount; i++) {
        hyperLight.push({
            meshProps: {
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 200,
                    Math.cos(i * 10 * 2) *
                        lightTunnelRadius *
                        Math.max(0.05, Math.random()),
                    Math.sin(i * 10 * 2) *
                        lightTunnelRadius *
                        Math.max(0.05, Math.random())
                ),
            },
            material: colors[Math.floor(Math.random() * colors.length)],
        });
    }

    let comets: CometProps[] = [];
    const cometCount = 5;
    for (let i = 0; i < cometCount; i++) {
        comets.push({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 200,
                Math.cos(i * 30 * 2) *
                    lightTunnelRadius *
                    Math.max(0.05, Math.random()),
                Math.sin(i * 30 * 2) *
                    lightTunnelRadius *
                    Math.max(0.05, Math.random())
            ),
        });
    }

    useFrame(() => {
        const r1 = scroll.range(0 / 2, 2 / 2);
        const text1 = scroll.visible(1 / 2, 2 / 2);
        space.current.position.x = 20 - r1 * 100;
        // welcomeText.current.visible = text1 || false;
    });

    return (
        <group ref={space}>
            {/* <effectComposer ref={composer} args={[gl]}>
                <unrealBloomPass threshold={0.62} strength={5} radius={1} />
            </effectComposer> */}

            <group>
                {hyperLight.map((hyperLight, index) => {
                    return (
                        <HyperLight
                            key={index}
                            meshProps={hyperLight.meshProps}
                            material={hyperLight.material}
                        />
                    );
                })}
            </group>

            {comets.map((comet, index) => {
                return <Comets key={index} position={comet.position} />;
            })}

            <Stars
                radius={40}
                depth={50}
                count={4000}
                factor={4}
                saturation={0}
                fade
                speed={2}
            />

            <Title text={'WELCOME!'} />
        </group>
    );
};

export default Space;
