/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import {useGLTF, OrthographicCamera} from '@react-three/drei';
import type {FC} from 'react';
import type {GLTF} from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cube_4: THREE.Mesh;
        Cube_3: THREE.Mesh;
        Shape: THREE.Mesh;
        Cube_2: THREE.Mesh;
        Cube: THREE.Mesh;
    };
    materials: {};
};

export const Briefcase: FC<JSX.IntrinsicElements['group']> = props => {
    const {nodes, materials} = useGLTF('/models/briefcase.gltf') as GLTFResult;
    const gold = new THREE.MeshStandardMaterial({color: '#daceaa', roughness: 0.15, metalness: 0.8});
    return (
        <group {...props} dispose={null}>
            <group scale={0.008}>
                <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={gold} position={[-0.32, -6.22, 18.45]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={gold} position={[-0.32, -10.84, 18.45]} />
                <mesh castShadow receiveShadow geometry={nodes.Shape.geometry} material={gold} position={[-24.13, 53.56, -7.34]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={gold} position={[0.15, 20.7, -15.45]} scale={[1, 1.46, 1]} />
                <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={gold} position={[0.15, -15.59, -4.62]} scale={[1, 1.46, 1]} />
            </group>
        </group>
    );
};

useGLTF.preload('/models/briefcase.gltf');
