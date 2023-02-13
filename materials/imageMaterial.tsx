import { useTexture } from '@react-three/drei';
import { BackSide } from 'three';

function ImageMaterial({
    url,
    transparent,
}: {
    url: string;
    transparent: boolean;
}) {
    const texture = useTexture(url);
    return (
        <meshBasicMaterial
            transparent={transparent}
            map={texture}
            toneMapped={false}
            side={BackSide}
        />
    );
}

export default ImageMaterial;
