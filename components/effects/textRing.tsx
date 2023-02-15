import { Cylinder } from '@react-three/drei';
import { CylinderGeometryProps, useFrame } from '@react-three/fiber';
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

    context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = color;
    context.fillText(children, 1024, canvas.height / 2);
    return canvas;
};

const TextRing = ({ text }: { text: string }) => {
    const canvas = useMemo(() => {
        return ccccc(text, 'white');
    }, [text]);

    const backCanvas = useMemo(() => {
        return ccccc(text, 'hotpink');
    }, [text]);

    const texture = useRef<THREE.CanvasTexture>(null!);
    const texture2 = useRef<THREE.CanvasTexture>(null!);
    useFrame(({ clock }) => {
        texture.current.offset.x = clock.getElapsedTime() / 2;
        texture2.current.offset.x = clock.getElapsedTime() / 2;
    });

    const cylArgs = [1, 1, 1, 64, 1, true] as
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
        | undefined;

    return (
        <group rotation-y={Math.PI / 4} rotation-x={-Math.PI / 16} scale={1.2}>
            <Cylinder args={cylArgs}>
                <meshStandardMaterial
                    transparent
                    attach="material"
                    side={THREE.FrontSide}
                    depthTest={false}
                    depthWrite={false}>
                    <canvasTexture
                        attach="map"
                        repeat={new Vector2(4, 1)}
                        image={canvas}
                        premultiplyAlpha
                        ref={texture}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        onUpdate={(s) => (s.needsUpdate = true)}
                    />
                </meshStandardMaterial>
            </Cylinder>

            <Cylinder args={cylArgs}>
                <meshStandardMaterial
                    attach="material"
                    side={THREE.BackSide}
                    depthTest={false}
                    depthWrite={false}>
                    <canvasTexture
                        attach="map"
                        repeat={new Vector2(8, 1)}
                        image={backCanvas}
                        premultiplyAlpha
                        ref={texture2}
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
