import {
    PerspectiveCamera,
    Plane,
    ScrollControls,
    useScroll,
} from '@react-three/drei';
import { AnimationTypes } from '@src/components/atoms/Animation';
import UI from 'components/html/ui';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';

const ExperiencesComponent = () => {
    const camera = useRef();
    const [animation, setAnimation] = useState<AnimationTypes>(
        AnimationTypes.FADEOUT
    );

    const scroll = useScroll();

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
                <mesh>
                    <planeBufferGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </PerspectiveCamera>
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
                <ExperiencesComponent />
            </ScrollControls>
        </group>
    );
};

export default Experiences;
