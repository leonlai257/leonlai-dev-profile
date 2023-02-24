import { Effects, Stars, useScroll } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three-stdlib';
import WelcomeText from './html/welcomeText';
import Comets, { CometProps } from './objects/comets';
import SpaceStation from './objects/spaceStation';
import HyperLight, { HyperLightProps } from './objects/hyperlight';
import Planets, { PlanetProps } from './objects/planets';

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

const planetsConfig: PlanetProps[] = [
    {
        groupProps: {
            position: [160, 0, 25],
            scale: [10, 10, 10],
        },
        meshProps: {},
        texture: '/Terrestrial.png',
        text: 'ABOUTME',
    },
    {
        groupProps: {
            position: [190, 10, 0],
            scale: [6, 6, 6],
        },
        meshProps: {},
        texture: '/Tropical.png',
        text: 'CONTACT',
    },
];

declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: any;
        }
    }
}

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
        const r2 = scroll.range(0 / 2, 2 / 2);
        space.current.position.x = 0 - r2 * 200;
    });

    return (
        <group ref={space}>
            {/* <Suspense fallback={null}>
                <Effects disableGamma>
                    <unrealBloomPass threshold={0.7} strength={1} radius={1} />
                </Effects>
            </Suspense> */}

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

            <SpaceStation
                groupProps={{
                    rotation: [0, Math.PI / 7, 0],
                    position: [200, -20, -55],
                }}
            />

            <Planets planets={planetsConfig} />

            {isTraveling ? (
                comets.map((comet, index) => {
                    return <Comets key={index} position={comet.position} />;
                })
            ) : (
                <Stars
                    radius={65}
                    depth={60}
                    count={4000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={2}
                />
            )}

            <WelcomeText
                title={`Hey, I am Leon Lai, a full stack web developer based in Hong Kong.`}
                subText={
                    'Building 3d websites and games is my passion. I am always exploring new technologies and equipped with extensive skills in Frontend, Backend, MR/AR, and more.'
                }
                scrollText={'Scroll to learn more...'}
            />
        </group>
    );
};

export default Space;
