import { useVideoTexture } from '@react-three/drei';
import { BackSide } from 'three';

function VideoMaterial({ url }: { url: string }) {
    const texture = useVideoTexture(url, {
        playsInline: true,
    });

    return (
        <meshBasicMaterial
            map={texture}
            toneMapped={false}
            side={BackSide}
            color="white"
        />
    );
}

export default VideoMaterial;
