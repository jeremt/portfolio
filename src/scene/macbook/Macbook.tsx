import * as THREE from 'three';
import {useRef, useState} from 'react';
import {useCursor, useGLTF} from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import type {FC} from 'react';
import type {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

import {MacbookScreen} from './MacbookScreen';
import {easing} from 'maath';

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

export const Macbook: FC<JSX.IntrinsicElements['group'] & MacbookProps> = props => {
    const {onFocus, onBlur} = props;
    const group = useRef(null);
    const {camera} = useThree();
    const {nodes, materials} = useGLTF('/assets/models/macbook.glb') as GLTFResult;
    const [hovered, hover] = useState(false);
    const [focused, focus] = useState(false);
    const pos = camera.position.clone();
    const quat = camera.quaternion.clone();

    useCursor(hovered);
    return (
        <group
            ref={group}
            {...props}
            name="macBook"
            dispose={null}
            onPointerOver={e => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
            onClick={e => {
                const oldPos = camera.position.clone();
                const oldQuat = camera.quaternion.clone();

                camera.position.copy(e.object.position.clone().setZ(10).setY(8));
                camera.rotation.copy(e.object.rotation);
                camera.lookAt(e.object.position.clone().setY(2));
                onFocus(camera.position, camera.quaternion);

                camera.position.copy(oldPos);
                camera.quaternion.copy(oldQuat);
                focus(true);
            }}
            onPointerMissed={e => {
                onBlur();
                focus(false);
            }}
        >
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh castShadow material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh castShadow material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh castShadow geometry={nodes['Cube008_2'].geometry}>
                        <MacbookScreen />
                        {/* {focused ? <MacbookScreen /> : <meshStandardMaterial color="#121212" metalness={0.5} roughness={0} />} */}
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
};
