import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

function ImageMaterial({ url, transparent = false }: { url: string; transparent?: boolean }) {
    const texture = useTexture(url);
    texture.repeat.x = 0.999;
    return <meshBasicMaterial transparent={transparent} map={texture} toneMapped={false} side={DoubleSide} depthWrite={false} depthTest={false} />;
}

export { ImageMaterial };
