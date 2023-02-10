import { Plane, useCursor, useScroll, useTexture } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Event, Intersection, Object3D } from 'three';

interface PlanetProps {
    meshProps: ThreeElements['mesh'];
    texture: string;
}

function ImageMaterial({ url }: { url: string }) {
    const texture = useTexture(url);
    return <meshBasicMaterial map={texture} toneMapped={false} />;
}

const DemoPlane = ({ groupProps }: { groupProps: ThreeElements['group'] }) => {
    return (
        <group {...groupProps}>
            <Plane
                args={[80, 45]}
                position={[-50, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}>
                <ImageMaterial url={'/Terrestrial.png'} />
            </Plane>
        </group>
    );
};

export default DemoPlane;
