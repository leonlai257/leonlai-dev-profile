import { PerspectiveCamera, ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { NextPage } from 'next';
import { useRef } from 'react';
import SpaceShip from './ship';
import Space from './space';

const MainScene: NextPage = () => {
    const camera = useRef();

    useFrame((state, delta) => {});
    return (
        <>
            <ScrollControls
                pages={2} // Each page takes 100% of the height of the canvas
                distance={1} // A factor that increases scroll bar travel (default: 1)
                damping={4} // Friction, higher is faster (default: 4)
                horizontal={false} // Can also scroll horizontally (default: false)
                infinite={false} // Can also scroll infinitely (default: false)
            >
                <PerspectiveCamera
                    makeDefault
                    ref={camera}
                    fov={60}
                    near={0.1}
                    far={1000}
                    position={[-80, 0, 0]}
                    rotation={[0, Math.PI + Math.PI / 2, 0]}
                >
                    <SpaceShip />
                </PerspectiveCamera>
                <Space />
            </ScrollControls>
        </>
    );
};

export default MainScene;
