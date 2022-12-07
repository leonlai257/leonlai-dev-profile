import {
    PerspectiveCamera,
    ScrollControls,
    useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { NextPage } from 'next';
import { useRef } from 'react';
import SpaceShip from '../components/ship';
import Space from '../components/space';

const LusionClone: NextPage = () => {
    const camera = useRef();
    const scroll = useScroll();
    let isTraveling = true;

    useFrame(() => {
        isTraveling = scroll?.visible(1 / 2, 2 / 2) ? false : true;
        // console.log(scroll);
    });

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
                    <SpaceShip isTraveling={isTraveling} />
                </PerspectiveCamera>
                <Space isTraveling={isTraveling} />
            </ScrollControls>
        </>
    );
};

export default LusionClone;
