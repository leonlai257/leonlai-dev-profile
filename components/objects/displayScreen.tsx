import { Box, Plane, Text, useScroll } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Euler } from 'three';

export interface ScreenProps {
    groupProps: ThreeElements['group'];
}

const defaultProps: ScreenProps = {
    groupProps: {},
};

const DisplayScreen = (props: ScreenProps) => {
    props = { ...defaultProps, ...props };
    const { groupProps } = props;
    const [size, setSize] = useState(1);
    const scroll = useScroll();

    const defaultSetting: ThreeElements['group'] = {
        rotation: new Euler(0, -Math.PI / 2, 0),
        scale: 2,
    };

    useFrame(() => {
        setSize(scroll.range(0 / 2, 1 / 2) * 2);
    });

    return (
        <group {...groupProps}>
            <group {...defaultSetting} scale={size}>
                <group position={[0, 0, 0.6]}>
                    <Plane
                        scale={[0.92, -0.9, 0.9]}
                        args={[16, 9, 1]}
                        getObjectsByProperty={undefined}
                        getVertexPosition={undefined}
                    >
                        <meshBasicMaterial color="white" />
                    </Plane>
                    <Text
                        scale={3}
                        color="black"
                        getObjectsByProperty={undefined}
                        getVertexPosition={undefined}
                    >
                        Directory
                    </Text>
                </group>

                <Box
                    args={[16, 9, 1]}
                    getObjectsByProperty={undefined}
                    getVertexPosition={undefined}
                >
                    <meshBasicMaterial color="black" />
                </Box>
            </group>
        </group>
    );
};

export default DisplayScreen;
