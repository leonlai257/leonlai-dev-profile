import { useCursor, useScroll } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import TextRing from 'components/effects/textRing';
import ImageMaterial from 'materials/imageMaterial';
import { useRef, useState } from 'react';

interface PlanetObjectProps {
    meshProps: ThreeElements['mesh'];
    texture: string;
}

export interface PlanetProps extends PlanetObjectProps {
    groupProps: ThreeElements['group'];
    text: string;
}

const PlanetSphere = ({
    props,
    hovered,
}: {
    props: PlanetObjectProps;
    hovered: boolean;
}) => {
    return (
        <mesh {...props.meshProps}>
            <sphereGeometry />
            {hovered ? (
                <meshBasicMaterial color="yellow" />
            ) : (
                <ImageMaterial url={props.texture} transparent={false} />
            )}
        </mesh>
    );
};

const PlanetObject = ({ planet }: { planet: PlanetProps }) => {
    const [clicked, setClickStatus] = useState(false);
    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);
    return (
        <group
            key={planet.text}
            {...planet.groupProps}
            onClick={(e) => {
                e.stopPropagation(), setClickStatus(!clicked);
            }}
            onPointerOver={(e) => (e.stopPropagation(), setHoverStatus(true))}
            onPointerOut={(e) => setHoverStatus(false)}
        >
            <TextRing text={planet.text} hovered={hovered} />
            <PlanetSphere
                props={{
                    meshProps: {
                        ...planet.meshProps,
                    },
                    texture: planet.texture,
                }}
                hovered={hovered}
            />
        </group>
    );
};

const Planets = ({ planets }: { planets: PlanetProps[] }) => {
    const ref = useRef<THREE.Group>(null!);
    const scroll = useScroll();
    const [size, setSize] = useState(1);

    useFrame(() => {
        setSize(scroll.range(0 / 2, 1 / 2) * 2);
    });

    return (
        <group ref={ref}>
            {planets.map((planet) => {
                planet.groupProps = { ...planet.groupProps, scale: size * 5 };
                return <PlanetObject key={planet.text} planet={planet} />;
            })}
        </group>
    );
};

export default Planets;
