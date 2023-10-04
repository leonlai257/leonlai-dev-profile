import { ThreeElements, useFrame, useLoader, useThree } from '@react-three/fiber'
import { createRef, useEffect, useState } from 'react'
import * as THREE from 'three'

export type TunnelProps = {
    position: [number, number, number]
    radius?: number
    length?: number
    props?: ThreeElements['mesh']
}

// A infinite tunnel effect, offsetting a tube geometry's texture to achieve a transition effect
export const Tunnel = ({ position, radius = 16, length = 7, props }: TunnelProps) => {
    const materialRef = createRef<THREE.MeshBasicMaterial>()
    const { mouse, camera } = useThree()
    const cameraOffset: number = 10

    // On Mounted/First load, initialize the texture
    const texture = useLoader(THREE.TextureLoader, '/textures/galaxyTexture.jpg')
    useEffect(() => {
        texture.wrapS = THREE.MirroredRepeatWrapping
        texture.wrapT = THREE.MirroredRepeatWrapping
        texture.repeat.set(2, 5)
    }, [])

    // Generating the curve for the tunnel
    const vec = new THREE.Vector3()
    const [curve, setCurve] = useState(() => {
        let points = []
        for (let i = 0; i < length; i += 1) {
            points.push(new THREE.Vector3(0, 0, 50 * i))
        }
        return new THREE.CatmullRomCurve3(points)
    })

    useFrame(() => {
        // Mapping some of the curve's points to the mouse position
        setCurve(() => {
            const newCurve = curve.clone()
            newCurve.points[2].x = radius * -mouse.x * 1.5
            newCurve.points[2].y = radius * mouse.y * 1.5
            newCurve.points[3].x = 0
            newCurve.points[3].y = 0
            newCurve.points[4].x = radius * mouse.x * 1.8
            newCurve.points[4].y = radius * -mouse.y * 1.8

            // Pointing the end of the tube downward, blocking the view of the end of the tunnel
            newCurve.points[6].y = -50

            return newCurve
        })

        // Zooming effect, by offsetting and reducing the repeat of the texture
        texture.offset.x += 0.02
        texture.offset.y += 0.005
        if (texture.repeat.x >= 1) {
            texture.repeat.x = texture.repeat.x - 0.002
        }

        // Slowly moving the camera to the tunnel position
        camera.position.lerp(vec.set(-mouse.x * cameraOffset, position[1] - mouse.y * cameraOffset, position[2]), 0.05)
    })

    return (
        <mesh position={position} {...props}>
            <tubeGeometry args={[curve, 70, radius, length, false]} onUpdate={(self) => (self.verticesNeedUpdate = true)} />
            <meshBasicMaterial ref={materialRef} map={texture} side={THREE.BackSide} />
        </mesh>
    )
}
