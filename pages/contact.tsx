import {
    Box,
    Html,
    OrbitControls,
    PerspectiveCamera,
    Text,
    useCursor,
} from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { Fallback } from '@src/components';
import type { NextPage } from 'next';
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Word = ({
    children,
    originalColor,
    transitionColor,
    ...props
}: {
    children: ReactNode;
    originalColor: string;
    transitionColor?: string;
    outlineWidth?: number;
    outlineColor?: string;
}) => {
    const color = new THREE.Color();
    const ref = useRef<any>();
    const [hovered, setHovered] = useState(false);
    const over = (e: any) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'auto';
        }
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(
            color.set(
                hovered
                    ? transitionColor
                        ? transitionColor
                        : originalColor
                    : originalColor
            ),
            0.1
        );
    });

    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            onClick={() => console.log('clicked')}
            {...props}
        >
            {children}
        </Text>
    );
};

const Contact = () => {
    const primaryColor = '#8294C4';
    const secondaryColor = '#ACB1D6';
    const tertiaryColor = '#DBDFEA';
    const quaternaryColor = '#FFEAD2';

    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    return (
        <>
            <Suspense
                fallback={
                    <Html>
                        <Fallback />
                    </Html>
                }
            >
                <Box args={[100, 100, 100]}>
                    <meshBasicMaterial
                        color={quaternaryColor}
                        side={THREE.DoubleSide}
                    />
                    <group
                        position={[2, 2, 0]}
                        // rotation={[
                        //     (Math.PI * -2) / 16,
                        //     (Math.PI * -2) / 16,
                        //     (Math.PI * -1) / 16,
                        // ]}
                        onPointerOver={(e) => setHoverStatus(true)}
                        onPointerOut={(e) => setHoverStatus(false)}
                    >
                        {/* <Text
                    fontSize={1}
                    color={hovered ? secondaryColor : primaryColor}
                    anchorX="center"
                    anchorY="middle"
                >
                    Leon Lai
                </Text> */}
                        <Word
                            originalColor={primaryColor}
                            transitionColor={secondaryColor}
                        >
                            Leon Lai
                        </Word>
                        <group position={[0.05, 0.05, 0.00001]}>
                            <Text
                                color={quaternaryColor}
                                outlineWidth={0.02}
                                outlineColor={
                                    hovered ? secondaryColor : primaryColor
                                }
                            >
                                Leon Lai
                            </Text>
                        </group>
                    </group>
                </Box>
                <PerspectiveCamera near={0.1} far={1000} />

                <OrbitControls enableZoom={true} />
            </Suspense>
        </>
    );
};

export default Contact;
