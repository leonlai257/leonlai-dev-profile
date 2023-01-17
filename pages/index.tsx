import { PerspectiveCamera, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import SpaceShip from '../components/ship';
import Space from '../components/space';

const Main: NextPage = () => {
    const camera = useRef();
    const scroll = useScroll();
    const [isTraveling, setTravelStatus] = useState(true);

    useFrame(() => {
        setTravelStatus(!scroll.visible(1 / 2, 2 / 2));
    });

    return (
        <group>
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
        </group>
    );
};

export default Main;
