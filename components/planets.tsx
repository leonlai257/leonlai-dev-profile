import { useTexture } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { useState } from 'react';

interface PlanetProps {
    meshProps: ThreeElements['mesh'];
    texture: string;
}

function ImageMaterial({ url }: { url: string }) {
    const texture = useTexture(url);
    return <meshBasicMaterial map={texture} toneMapped={false} />;
}

const PlanetObject = (props: PlanetProps) => {
    return (
        <mesh {...props.meshProps}>
            <sphereGeometry args={[1]} />
            <ImageMaterial url={props.texture} />
        </mesh>
    );
};

const Planets = (props: ThreeElements['group']) => {
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
    return (
        <group {...props}>
            {planets.map((planet, index) => {
                return (
                    <PlanetObject
                        key={index}
                        meshProps={planet.meshProps}
                        texture={planet.texture}
                    />
                );
            })}
        </group>
    );
};

export default Planets;
