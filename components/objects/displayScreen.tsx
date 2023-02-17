import { Box, Plane, Text } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import VideoMaterial from 'materials/videoMaterial';
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

    const defaultSetting: ThreeElements['group'] = {
        rotation: new Euler(0, -Math.PI / 2, 0),
        scale: 2,
    };

    return (
        <group {...groupProps}>
            <group {...defaultSetting}>
                <Plane
                    scale={[0.9, -0.9, 0.9]}
                    args={[16, 9, 1]}
                    position={[0, 0, 1.2]}>
                    <meshBasicMaterial color="white" />
                </Plane>
                <Text position={[0, 0, 0]}> Directory</Text>

                <Box args={[16, 9, 1]}>
                    <meshBasicMaterial color="black" />
                </Box>
            </group>
        </group>
    );
};

export default DisplayScreen;
