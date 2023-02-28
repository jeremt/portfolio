import * as THREE from 'three';
import {forwardRef, useCallback, useEffect, useRef, useState} from 'react';
import {Center, Text3D, useCursor, useGLTF} from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import type {FC} from 'react';
import type {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';
import styled from '@emotion/styled';
import {Html} from '@react-three/drei';
import {MacbookScreen} from './MacbookScreen';

interface MacbookProps {
    onFocus: (position: THREE.Vector3, quaternion: THREE.Quaternion) => void;
    onBlur: () => void;
}

type GLTFResult = GLTF & {
    nodes: {
        Cube008: THREE.Mesh;
        Cube008_1: THREE.Mesh;
        Cube008_2: THREE.Mesh;
        //
        Cube002: THREE.Mesh;
        Cube002_1: THREE.Mesh;
        //
        keyboard: THREE.Mesh;
        touchbar: THREE.Mesh;
    };
    materials: {
        keys: THREE.MeshStandardMaterial;
        trackpad: THREE.MeshStandardMaterial;
        touchbar: THREE.MeshStandardMaterial;
        aluminium: THREE.MeshStandardMaterial;
    };
};

export const Macbook = forwardRef<THREE.Group>((props, ref) => {
    const {nodes, materials} = useGLTF('/assets/models/macbook.glb') as GLTFResult;
    const [hovered, hover] = useState(false);
    const [focused, focus] = useState(false);

    useEffect(() => {
        if (location.hash === '#projects') {
            focus(true);
        }
    }, []);
    useCursor(hovered);
    return (
        <group
            ref={ref}
            {...props}
            name="macBook"
            dispose={null}
            onPointerOver={e => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
            onClick={e => {
                location.hash = '#projects';
                focus(true);
            }}
            onPointerMissed={e => {
                location.hash = '';
                focus(false);
            }}
        >
            <Center position-y={8}>
                <Text3D visible={hovered && !focused} scale={1.2} font="/assets/fonts/oswald_regular.json">
                    PROJECTS
                </Text3D>
            </Center>
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh castShadow material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh castShadow material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh castShadow geometry={nodes['Cube008_2'].geometry}>
                        <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.1} />
                        <Html rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
                            {focused && <MacbookScreen />}
                        </Html>
                    </mesh>
                </group>
            </group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    );
});
