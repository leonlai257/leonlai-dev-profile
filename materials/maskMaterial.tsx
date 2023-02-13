import { useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

function MaskMaterial({ url, alpha }: { url: string; alpha: string }) {
    const texture = useVideoTexture(url, {});
    const mask = useTexture(alpha);

    return (
        <meshStandardMaterial
            alphaMap={mask}
            alphaTest={0.5}
            transparent={true}
            map={texture}
            toneMapped={false}
            side={THREE.BackSide}
        />
    );
}

export default MaskMaterial;
