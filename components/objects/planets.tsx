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

const PlanetObject = ({
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

const Planets = ({ planets }: { planets: PlanetProps[] }) => {
    const ref = useRef<THREE.Group>(null!);
    const scroll = useScroll();
    const [size, setSize] = useState(1);
    const [clicked, setClickStatus] = useState(false);
    const [hovered, setHoverStatus] = useState(false);

    useCursor(hovered);

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
                        }}
                        onPointerOver={(e) => (
                            e.stopPropagation(), setHoverStatus(true)
                        )}
                        onPointerOut={(e) => setHoverStatus(false)}>
                        <TextRing text={planet.text} hovered={hovered} />
                        <PlanetObject
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
            })}
        </group>
    );
};

export default Planets;
