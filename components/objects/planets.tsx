import { useCursor, useScroll, useTexture } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import TextRing from 'components/effects/textRing';
import ImageMaterial from 'materials/imageMaterial';
import { useRef, useState } from 'react';
import { Event, Intersection, Object3D } from 'three';

interface PlanetObjectProps {
    meshProps: ThreeElements['mesh'];
    texture: string;
}

export interface PlanetProps extends PlanetObjectProps {
    groupProps: ThreeElements['group'];
    text: string;
}

const PlanetObject = ({ props }: { props: PlanetObjectProps }) => {
    const [hovered, setHoverStatus] = useState(false);

    useCursor(hovered);

    return (
        <mesh
            {...props.meshProps}
            onPointerOver={(e) => (e.stopPropagation(), setHoverStatus(true))}
            onPointerOut={(e) => setHoverStatus(false)}>
            <sphereGeometry />
            {hovered ? (
                <meshBasicMaterial color="yellow" />
            ) : (
                <ImageMaterial url={props.texture} transparent={false} />
            )}
        </mesh>
    );
};

const Planets = ({ planets }: { planets: PlanetProps[] }) => {
    const ref = useRef<THREE.Group>(null!);
    const scroll = useScroll();
    const [size, setSize] = useState(1);
    const [clicked, setClickStatus] = useState(false);

    useFrame(() => {
        setSize(scroll.range(0 / 2, 1 / 2));
    });

    return (
        <group ref={ref}>
            {planets.map((planet, index) => {
                return (
                    <group
                        key={index}
                        {...planet.groupProps}
                        scale={size * 5}
                        onClick={(e) => {
                            e.stopPropagation(), setClickStatus(!clicked);
                        }}>
                        <TextRing text={planet.text} />
                        <PlanetObject
                            props={{
                                meshProps: {
                                    ...planet.meshProps,
                                },
                                texture: planet.texture,
                            }}
                        />
                    </group>
                );
            })}
        </group>
    );
};

export default Planets;
