import { useCursor, useScroll, useTexture } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import ImageMaterial from 'materials/imageMaterial';
import { useRef, useState } from 'react';
import { Event, Intersection, Object3D } from 'three';

interface PlanetProps {
    meshProps: ThreeElements['mesh'];
    texture: string;
}

const PlanetObject = ({
    props,
    size,
}: {
    props: PlanetProps;
    size: number;
}) => {
    const [hovered, setHoverStatus] = useState(false);
    const [clicked, setClickStatus] = useState(false);
    useCursor(hovered);

    return (
        <mesh
            {...props.meshProps}
            onClick={(e) => {
                e.stopPropagation(), setClickStatus(!clicked);
            }}
            onPointerOver={(e) => (e.stopPropagation(), setHoverStatus(true))}
            onPointerOut={(e) => setHoverStatus(false)}>
            <sphereGeometry args={[clicked ? 0.5 : size]} />
            {hovered ? (
                <meshBasicMaterial color="yellow" />
            ) : (
                <ImageMaterial url={props.texture} transparent={false} />
            )}
        </mesh>
    );
};

const Planets = ({ groupProps }: { groupProps: ThreeElements['group'] }) => {
    const [{ objects, cycle }, setObjectCycle] = useState<{
        objects: Intersection<Object3D<Event>>[];
        cycle: number;
    }>({
        objects: [],
        cycle: 0,
    });

    let planets: PlanetProps[] = [
        {
            meshProps: {
                position: [160, 0, 0],
                scale: [10, 10, 10],
            },
            texture: '/Terrestrial.png',
        },
        {
            meshProps: {
                position: [210, 30, 40],
                scale: [6, 6, 6],
            },
            texture: '/Tropical.png',
        },
    ];

    const ref = useRef<THREE.Group>(null!);
    const scroll = useScroll();
    const [size, setSize] = useState(1);

    useFrame(() => {
        setSize(scroll.range(0 / 2, 1 / 2));
    });

    return (
        <group ref={ref} {...groupProps}>
            {planets.map((planet, index) => {
                return (
                    <PlanetObject
                        key={index}
                        props={{
                            meshProps: {
                                ...planet.meshProps,
                            },
                            texture: planet.texture,
                        }}
                        size={size}
                    />
                );
            })}
        </group>
    );
};

export default Planets;
