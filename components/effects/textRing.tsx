import { Cylinder } from '@react-three/drei';
import {
    CylinderBufferGeometryProps,
    ThreeElements,
    useFrame,
} from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Vector2 } from 'three';

const ccccc = (children: string, color: string) => {
    const fontSize = 450;

    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = 2048;
    canvas.height = 2048;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    context.fillStyle = 'transparent';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = `bold ${fontSize}px -apple-system, ubuntu, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = color;
    context.fillText(children, 1024, canvas.height / 2);
    return canvas;
};

const TextRing = ({
    text,
    hovered,
    groupProps,
}: {
    text: string;
    hovered: boolean;
    groupProps?: ThreeElements['group'];
}) => {
    const canvas = useMemo(() => {
        return ccccc(text, 'white');
    }, [text]);

    const backCanvas = useMemo(() => {
        return ccccc(text, 'purple');
    }, [text]);

    const frontTexture = useRef<THREE.CanvasTexture>(null!);
    const backTexture = useRef<THREE.CanvasTexture>(null!);
    useFrame(() => {
        frontTexture.current.offset.x += hovered ? -0.012 : 0.006;
        backTexture.current.offset.x += hovered ? -0.012 : 0.006;
    });

    const cylArgs:
        | [
              radiusTop?: number | undefined,
              radiusBottom?: number | undefined,
              height?: number | undefined,
              radialSegments?: number | undefined,
              heightSegments?: number | undefined,
              openEnded?: boolean | undefined,
              thetaStart?: number | undefined,
              thetaLength?: number | undefined
          ]
        | undefined = [1, 1, 1, 64, 1, true];

    return (
        <group
            rotation-y={Math.PI / 4}
            rotation-x={-Math.PI / 16}
            scale={1.2}
            {...groupProps}
        >
            <Cylinder
                args={cylArgs}
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
            >
                <meshStandardMaterial
                    transparent
                    blending={THREE.AdditiveBlending}
                    attach="material"
                    side={THREE.FrontSide}
                    depthTest={false}
                    depthWrite={false}
                >
                    <canvasTexture
                        attach="map"
                        repeat={new Vector2(4, 1)}
                        image={canvas}
                        premultiplyAlpha
                        ref={frontTexture}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        onUpdate={(s) => (s.needsUpdate = true)}
                    />
                </meshStandardMaterial>
            </Cylinder>
            <Cylinder
                args={cylArgs}
                getObjectsByProperty={undefined}
                getVertexPosition={undefined}
            >
                <meshStandardMaterial
                    blending={THREE.AdditiveBlending}
                    attach="material"
                    side={THREE.BackSide}
                    depthTest={false}
                    depthWrite={false}
                >
                    <canvasTexture
                        attach="map"
                        repeat={new Vector2(8, 1)}
                        image={backCanvas}
                        premultiplyAlpha
                        ref={backTexture}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        onUpdate={(s) => (s.needsUpdate = true)}
                    />
                </meshStandardMaterial>
            </Cylinder>
        </group>
    );
};

export default TextRing;
