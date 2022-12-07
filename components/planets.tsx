import { ThreeElements } from '@react-three/fiber';

const Planets = (props: ThreeElements['group']) => {
    return (
        <group {...props}>
            <mesh position={[50, 0, 0]}>
                <sphereGeometry args={[1.2]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
            </mesh>
        </group>
    );
};

export default Planets;
