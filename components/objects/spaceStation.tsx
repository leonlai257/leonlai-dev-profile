import { Box, Plane, Text, useScroll } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Euler } from 'three';

export interface SpaceStationProps {
    groupProps: ThreeElements['group'];
}

const defaultProps: SpaceStationProps = {
    groupProps: {},
};

const SpaceStation = (props: SpaceStationProps) => {
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

    const defaultBoxArgs:
        | [
              width?: number | undefined,
              height?: number | undefined,
              widthSegments?: number | undefined,
              heightSegments?: number | undefined
          ]
        | undefined = [16, 9, 1];

    return (
        <group {...groupProps}>
            <group {...defaultSetting} scale={size}>
                <group position={[0, 0, 0.6]}>
                    <Plane
                        scale={[0.92, -0.9, 0.9]}
                        args={defaultBoxArgs}
                        getObjectsByProperty={undefined}
                        getVertexPosition={undefined}
                    >
                        <meshBasicMaterial color="white" />
                    </Plane>
                    <Text
                        position={[0, 0, 0.1]}
                        scale={3}
                        color="black"
                        getObjectsByProperty={undefined}
                        getVertexPosition={undefined}
                        font={'ubuntu'}
                    >
                        LEON LAI
                    </Text>
                </group>

                <Box
                    args={defaultBoxArgs}
                    getObjectsByProperty={undefined}
                    getVertexPosition={undefined}
                >
                    <meshBasicMaterial color="black" />
                </Box>
                <Box
                    args={defaultBoxArgs}
                    getObjectsByProperty={undefined}
                    getVertexPosition={undefined}
                    position={[
                        0,
                        defaultBoxArgs[1]! / -2,
                        defaultBoxArgs[0]! / 4,
                    ]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial color="black" />
                </Box>
            </group>
        </group>
    );
};

export default SpaceStation;
