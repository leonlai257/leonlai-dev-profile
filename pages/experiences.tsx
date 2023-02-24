import {
    PerspectiveCamera,
    ScrollControls,
    useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AnimationTypes } from '@src/components/atoms/Animation';
import UI from 'components/html/ui';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import SpaceShip from '../components/objects/ship';
import Space from '../components/space';

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
            <UI animation={animation} setAnimation={setAnimation} />
            <PerspectiveCamera
                makeDefault
                ref={camera}
                fov={60}
                near={0.1}
                far={1000}
                position={[-80, 0, 0]}
                rotation={[0, Math.PI + Math.PI / 2, 0]}
                getObjectsByProperty={undefined}
            >
                <SpaceShip isTraveling={isTraveling} />
            </PerspectiveCamera>
            <Space isTraveling={isTraveling} />
        </group>
    );
};

const Experiences: NextPage = () => {
    return (
        <group>
            <ambientLight />
            <directionalLight position={[0, 0, 0]} intensity={1} />
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

export default Experiences;
