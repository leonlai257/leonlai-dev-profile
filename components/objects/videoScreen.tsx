import { Box, Plane } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import VideoMaterial from 'materials/videoMaterial';
import { Euler } from 'three';

export interface ScreenProps {
    path: string;
    groupProps: ThreeElements['group'];
}

const defaultProps: ScreenProps = {
    path: 'https://coreality-showroom-testing.s3.ap-east-1.amazonaws.com/sampleRoom.mp4',
    groupProps: {},
};

const VideoScreen = (props: ScreenProps) => {
    props = { ...defaultProps, ...props };
    const { path } = props;

    const defaultSetting: ThreeElements['group'] = {
        position: [0, 0, 0],
        rotation: new Euler(0, Math.PI / 6, 0),
        scale: 0.9,
    };

    return (
        <group {...defaultSetting}>
            <Plane
                scale={[1, -1, 1]}
                args={[7.75, 4.3, 1]}
                position={[0, 0, 0.2]}
                rotation={[Math.PI, 0, 0]}
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
            >
                <VideoMaterial url={path!} />
                {/* <Suspense
                    fallback={
                        <ImageMaterial
                            url={
                                'https://coreality-showroom-testing.s3.ap-east-1.amazonaws.com/sampleFallBack.png'
                            }
                        />
                    }
                >
                    <VideoMaterial url={path!} />
                </Suspense> */}
            </Plane>

            <Box args={[8, 4.5, 0.2]}>
                <meshBasicMaterial color="black" />
            </Box>
        </group>
    );
};

export default VideoScreen;
