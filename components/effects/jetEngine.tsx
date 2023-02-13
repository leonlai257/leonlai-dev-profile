import { extend, ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import JetEngineMaterial from 'materials/jetEngineMaterial';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

extend({ JetEngineMaterial });

const JetEngine = (props: ThreeElements['mesh']) => {
    const ref = useRef<THREE.ShaderMaterial>(null!);
    useFrame(({ clock }) => {
        ref.current.uniforms.uTime.value = clock.getElapsedTime();
    });

    const [noiseMap] = useLoader(THREE.TextureLoader, ['/noiseTexture.jpg']);

    noiseMap.wrapT = THREE.RepeatWrapping;
    noiseMap.wrapS = THREE.RepeatWrapping;

    useEffect(() => {
        ref.current.uniforms.uTexture.value = noiseMap;
        ref.current.uniforms.uColor.value = new THREE.Color(4, 0.5, 2.4);
    });

    return (
        <mesh {...props} rotation={[Math.PI / 2, 0, 0]}>
            <coneBufferGeometry args={[0.18, 1, 32]} />
            <jetEngineMaterial ref={ref} />
        </mesh>
    );
};

export default JetEngine;
