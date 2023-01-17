import { Effects, Stars, useScroll } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three-stdlib';
import Title from './centerText';
import Comets, { CometProps } from './comets';
import HyperLight, { HyperLightProps } from './hyperlight';
import Planets from './planets';

extend({ UnrealBloomPass });

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

const Space = ({ isTraveling }: { isTraveling: boolean }) => {
    const scroll = useScroll();
    const space = useRef<THREE.Group>(null!);

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
    const cometCount = 2;
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
        space.current.position.x = 0 - r1 * 200;
    });

    return (
        <group ref={space}>
            <Effects disableGamma>
                <unrealBloomPass threshold={0.62} strength={5} radius={1} />
            </Effects>

            {/* To be disabled after entering some other instance*/}
            {hyperLight.map((hyperLight, index) => {
                return (
                    <HyperLight
                        key={index}
                        meshProps={hyperLight.meshProps}
                        material={hyperLight.material}
                    />
                );
            })}

            <Planets groupProps={{}} />

            {isTraveling ? (
                comets.map((comet, index) => {
                    return <Comets key={index} position={comet.position} />;
                })
            ) : (
                <Stars
                    radius={60}
                    depth={60}
                    count={4000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={2}
                />
            )}

            <Title
                title={'WELCOME TO SPACE TRAVEL'}
                subText={'Use scroll to continue...'}
            />
        </group>
    );
};

export default Space;
