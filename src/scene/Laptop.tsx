import * as THREE from 'three';
import {GLTF} from 'three-stdlib';
import {Float, useCursor, useGLTF, useTexture} from '@react-three/drei';
import {FC, useCallback, useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        ComputerScreen: THREE.Mesh;
        CompuerPad: THREE.Mesh;
        ComputerKeyboard: THREE.Mesh;
        ComputerBottom: THREE.Mesh;
        ComputerTop: THREE.Mesh;
    };
    materials: {};
};

export const Laptop: FC<JSX.IntrinsicElements['group'] & {map?: THREE.Texture}> = ({map, ...props}) => {
    const group = useRef<THREE.Group>(null);
    const {nodes} = useGLTF('/models/laptop.gltf') as GLTFResult;
    // useFrame(state => {
    //     if (group.current === null) {
    //         return;
    //     }
    //     const t = state.clock.getElapsedTime();
    //     group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.2, 0.1);
    //     group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
    //     group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 10, 0.1);
    //     group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t) / 6, 0.1);
    // });
    return (
        <group {...props} dispose={null}>
            <Float>
                <group ref={group} scale={0.015} rotation-x={0.2}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ComputerScreen.geometry}
                        material={nodes.ComputerScreen.material}
                        position={[0, 4.2, -71.3]}
                        rotation={[-0.17, 0, 0]}
                    >
                        <meshStandardMaterial map={map} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CompuerPad.geometry}
                        material={nodes.CompuerPad.material}
                        position={[0, -66.01, 62.64]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.83}
                    >
                        <meshStandardMaterial color="#222222" />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ComputerKeyboard.geometry}
                        material={nodes.ComputerKeyboard.material}
                        position={[0, -62.82, -3.88]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.83}
                    >
                        <meshStandardMaterial color="#222222" />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ComputerBottom.geometry}
                        material={nodes.ComputerBottom.material}
                        position={[0, -66.85, 15.84]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <meshStandardMaterial color="#333333" />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ComputerTop.geometry}
                        material={nodes.ComputerTop.material}
                        position={[0, -0.24, -76.29]}
                        rotation={[-0.17, 0, 0]}
                    >
                        <meshStandardMaterial color="#333333" />
                    </mesh>
                </group>
            </Float>
        </group>
    );
};

useGLTF.preload('/models/laptop.gltf');
