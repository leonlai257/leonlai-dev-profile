import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Rig = ({
    children,
    isTraveling,
}: {
    children: any;
    isTraveling: boolean;
}) => {
    const ref = useRef<THREE.Group>(null!);
    const vec = new THREE.Vector3();
    const { camera, mouse } = useThree();

    const cameraOffset: number = 4;

    const [shipShaking, setShaking] = useState(1);

    useFrame(() => {
        camera.position.lerp(
            vec.set(
                camera.position.x,
                -mouse.y * (isTraveling ? cameraOffset : cameraOffset * 0.2),
                -mouse.x * (isTraveling ? cameraOffset : cameraOffset * 0.2)
            ),
            0.05
        );

        setShaking(isTraveling ? 1 : 0);

        ref.current.position.lerp(
            vec.set(mouse.x * -6, -4 + mouse.y * -1, -12),
            0.1
        );

        ref.current.rotation.x = THREE.MathUtils.lerp(
            ref.current.rotation.x,
            (-mouse.x * Math.PI) / 30 +
                ((Math.random() - 0.5) * shipShaking) / 50,
            0.1
        );

        ref.current.rotation.y = THREE.MathUtils.lerp(
            ref.current.rotation.y,
            (-mouse.y * Math.PI) / 30 +
                ((Math.random() - 0.5) * shipShaking) / 50,
            0.1
        );

        ref.current.rotation.z = THREE.MathUtils.lerp(
            ref.current.rotation.z,
            (-mouse.x * Math.PI) / 8 +
                ((Math.random() - 0.5) * shipShaking) / 50,
            0.1
        );
    });
    return <group ref={ref}>{children}</group>;
};

export default Rig;
