import {
    PerspectiveCamera,
    ScrollControls,
    useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Layout, Space, SpaceShip } from '@src/components';
import { AnimationTypes } from '@src/styles/animations';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';

const MainComponent = () => {
    const camera = useRef();
    const scroll = useScroll();
    const [isTraveling, setTravelStatus] = useState(true);
    const [animation, setAnimation] = useState<AnimationTypes>(
        AnimationTypes.FADEOUT
    );

    useFrame(() => {
        setTravelStatus(!scroll.visible(1 / 2, 2 / 2));
    });
    return (
        <group>
            {/* <Layout animation={animation} setAnimation={setAnimation} /> */}
            <PerspectiveCamera
                makeDefault
                // ref={camera}
                fov={60}
                near={0.1}
                far={1000}
                position={[-80, 0, 0]}
                rotation={[0, Math.PI + Math.PI / 2, 0]}
            >
                <SpaceShip isTraveling={isTraveling} />
            </PerspectiveCamera>
            <Space isTraveling={isTraveling} />
        </group>
    );
};

const Main: NextPage = () => {
    return (
        <group>
            <ScrollControls
                pages={2}
                distance={1}
                damping={1}
                horizontal={false}
                infinite={false}
            >
                <MainComponent />
            </ScrollControls>
        </group>
    );
};

export default Main;
