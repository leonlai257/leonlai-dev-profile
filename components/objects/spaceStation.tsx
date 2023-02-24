import { Box, Plane, Text, useCursor, useScroll } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import TextRing from 'components/effects/textRing';
import { useState } from 'react';
import { Euler } from 'three';
import { useLocation } from 'wouter';

export interface SpaceStationProps {
    groupProps: ThreeElements['group'];
}

const defaultProps: SpaceStationProps = {
    groupProps: {},
};

const SpaceStation = (props: SpaceStationProps) => {
    props = { ...defaultProps, ...props };
    const { groupProps } = props;

    const scroll = useScroll();

    const [size, setSize] = useState(1);

    const [clicked, setClickStatus] = useState(false);
    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    useFrame(() => {
        setSize(scroll.range(0 / 2, 1 / 2) * 2);
    });

    const [location, push] = useLocation();

    const onClickEvent = () => {
        push('/experiences');
    };

    const defaultSetting: ThreeElements['group'] = {
        rotation: new Euler(0, -Math.PI / 2, 0),
        scale: 2,
    };

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
            <group
                {...defaultSetting}
                scale={size}
                onClick={(e) => {
                    e.stopPropagation(), onClickEvent();
                }}
                onPointerOver={(e) => (
                    e.stopPropagation(), setHoverStatus(true)
                )}
                onPointerOut={(e) => setHoverStatus(false)}
            >
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
                <TextRing
                    groupProps={{
                        scale: 10,
                    }}
                    text={'PAST EXPERIENCES'}
                    hovered={hovered}
                />

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
