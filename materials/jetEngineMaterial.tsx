import { shaderMaterial } from '@react-three/drei';
import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';
import { jetEngineFragment, jetEngineVertex } from '../shaders/jetEngineShader';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            jetEngineMaterial: ReactThreeFiber.Object3DNode<
                THREE.ShaderMaterial,
                typeof JetEngineMaterial
            >;
        }
    }
}

const JetEngineMaterial = shaderMaterial(
    {
        blending: THREE.AdditiveBlending,
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uTextureTiling: 3.2,
        uThrust: 0.8,
    },
    jetEngineVertex,
    jetEngineFragment
);

export default JetEngineMaterial;
