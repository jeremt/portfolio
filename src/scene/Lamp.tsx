import * as THREE from 'three';
import {Sphere, useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import type {FC} from 'react';

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
        Object_5: THREE.Mesh;
        Object_7: THREE.Mesh;
        Object_9: THREE.Mesh;
        Object_11: THREE.Mesh;
        Object_12: THREE.Mesh;
    };
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial;
        Material: THREE.MeshStandardMaterial;
        ['Material.002']: THREE.MeshStandardMaterial;
        ['Material.004']: THREE.MeshStandardMaterial;
    };
};

export const Lamp: FC<JSX.IntrinsicElements['group']> = props => {
    const {nodes, materials} = useGLTF('/assets/models/lamp.glb') as GLTFResult;
    return (
        <group {...props} dispose={null} position={[-10, 0, 2]} rotation={[0, -0.7, 0]} scale={[0.7, 0.7, 0.7]}>
            <group scale={[3.07, 0.17, 3.07]}>
                <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
                <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Material} />
            </group>
            {/* <pointLight position={[2, 8.5, 0]} color="#ffeab2" /> */}
            {/* <Sphere args={[0.6]} position={[2, 8.5, 0]}>
                <meshBasicMaterial color="yellow" />
            </Sphere> */}
            <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.001']} position={[-1.86, 0.12, 0]} scale={0.58} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['Material.001']}
                position={[-1.86, 1.04, 0]}
                scale={[0.14, 0.2, 0.2]}
            />
            <group position={[0.18, 10.22, 0]} rotation={[0, 0, 0.78]} scale={[0.64, 1.09, 0.64]}>
                <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials['Material.002']} />
                <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['Material.004']} />
            </group>
        </group>
    );
};

useGLTF.preload('/assets/models/lamp.glb');
