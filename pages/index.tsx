import { PerspectiveCamera, ScrollControls } from '@react-three/drei';
import type { NextPage } from 'next';
import { useRef } from 'react';
import SpaceShip from '../components/ship';
import Space from '../components/space';

const LusionClone: NextPage = () => {
    const camera = useRef();
    const ship = useRef();

    return (
        <>
            <ScrollControls
                pages={2}
                distance={1}
                damping={4}
                horizontal={false}
                infinite={false}>
                <PerspectiveCamera
                    makeDefault
                    ref={camera}
                    fov={60}
                    near={0.1}
                    far={1000}
                    position={[-80, 0, 0]}
                    rotation={[0, Math.PI + Math.PI / 2, 0]}>
                    <SpaceShip />
                </PerspectiveCamera>
                <Space />
            </ScrollControls>
        </>
    );
};

export default LusionClone;
