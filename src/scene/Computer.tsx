/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import {useGLTF, OrthographicCamera} from '@react-three/drei';
import type {GLTF} from 'three-stdlib';
import type {FC} from 'react';

type GLTFResult = GLTF & {
    nodes: {
        Cube: THREE.Mesh;
        Rectangle_6: THREE.Mesh;
        Rectangle_5: THREE.Mesh;
        Rectangle_4: THREE.Mesh;
        Sphere_3: THREE.Mesh;
        Sphere_2: THREE.Mesh;
        Sphere: THREE.Mesh;
        Rectangle_3: THREE.Mesh;
        Rectangle_2: THREE.Mesh;
    };
    materials: {};
};

export const Computer = (props: JSX.IntrinsicElements['group']) => {
    const {nodes, materials} = useGLTF('/models/computer.gltf') as GLTFResult;
    const gold = new THREE.MeshStandardMaterial({color: '#daceaa', roughness: 0.15, metalness: 0.8});
    return (
        <group {...props} dispose={null}>
            <group scale={0.008}>
                <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={gold} position={[0.77, -47.69, 1.72]} />
                <mesh castShadow receiveShadow geometry={nodes.Rectangle_6.geometry} material={gold} position={[9.25, 16.69, -2.25]} scale={[1, 0.91, 1]} />
                <mesh castShadow receiveShadow geometry={nodes.Rectangle_5.geometry} material={gold} position={[-32.51, 16.69, -2.25]} scale={[1, 0.91, 1]} />
                <mesh castShadow receiveShadow geometry={nodes.Rectangle_4.geometry} material={gold} position={[-11.51, 29.37, -2.25]} scale={[1, 0.91, 1]} />
                <mesh castShadow receiveShadow geometry={nodes.Sphere_3.geometry} material={gold} position={[-34.61, 43.78, 0.1]} scale={1.25} />
                <mesh castShadow receiveShadow geometry={nodes.Sphere_2.geometry} material={gold} position={[-42.35, 43.78, 0.1]} scale={1.25} />
                <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={gold} position={[-50.27, 43.78, 0.1]} scale={1.25} />
                <mesh castShadow receiveShadow geometry={nodes.Rectangle_3.geometry} material={gold} position={[-11.55, 25.14, -6.25]} />
                <mesh castShadow receiveShadow geometry={nodes.Rectangle_2.geometry} material={gold} position={[0, 14.22, -16.19]} />
            </group>
        </group>
    );
};

useGLTF.preload('/models/computer.gltf');