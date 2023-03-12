import * as THREE from 'three';
import {useFrame, useThree} from '@react-three/fiber';
import {easing} from 'maath';
import {FC, Suspense, useCallback, useEffect, useRef} from 'react';

import {Lamp} from './Lamp';
import {Desk} from './Desk';
import {Resume} from './Resume';
import {Macbook} from './macbook/Macbook';
import {IPhone} from './iphone/IPhone';
import {Center, Float, Html, Text3D, useProgress} from '@react-three/drei';

interface CameraTarget {
    position: THREE.Vector3;
    positionRatio: number;
    quaternion: THREE.Quaternion;
    quaternionRatio: number;
}

export const Room: FC = () => {
    const {progress} = useProgress();
    const roomRef = useRef<THREE.Group>(null);
    const macbookRef = useRef<THREE.Group>(null);
    const iphoneRef = useRef<THREE.Group>(null);
    const resumeRef = useRef<THREE.Group>(null);
    const {camera} = useThree();
    const targetRef = useRef<CameraTarget>({
        position: camera.position.clone(),
        positionRatio: 0,
        quaternion: camera.quaternion.clone(),
        quaternionRatio: 0,
    });

    useEffect(() => {
        const applyFocus = () => {
            console.log('IN');
            const oldPos = camera.position.clone();
            const oldQuat = camera.quaternion.clone();
            switch (location.hash) {
                case '':
                    camera.position.set(0, 20, 50);
                    camera.lookAt(0, 0, 0);
                    targetRef.current.position.copy(camera.position);
                    targetRef.current.positionRatio = 0.6;
                    targetRef.current.quaternion.copy(camera.quaternion);
                    targetRef.current.quaternionRatio = 0.4;

                    camera.position.copy(oldPos);
                    camera.quaternion.copy(oldQuat);
                    return;
                case '#projects':
                    camera.position.copy(macbookRef.current.position.clone().setZ(10).setY(8));
                    camera.rotation.copy(macbookRef.current.rotation);
                    camera.lookAt(macbookRef.current.position.clone().setY(2));
                    break;
                case '#resume':
                    camera.position.copy(resumeRef.current.position.clone().setY(6));
                    camera.lookAt(resumeRef.current.position);
                    break;
                case '#contact':
                    camera.position.copy(iphoneRef.current.position.clone().setY(6));
                    camera.lookAt(iphoneRef.current.position);
                    break;
            }

            targetRef.current.position.copy(camera.position);
            targetRef.current.positionRatio = 0.4;
            targetRef.current.quaternion.copy(camera.quaternion);
            targetRef.current.quaternionRatio = 0.6;

            camera.position.copy(oldPos);
            camera.quaternion.copy(oldQuat);
            // setHash(location.hash);
        };
        window.addEventListener('hashchange', applyFocus);
        applyFocus();
        return () => window.removeEventListener('hashchange', applyFocus);
    }, []);

    useFrame((state, dt) => {
        easing.damp3(state.camera.position, targetRef.current.position, targetRef.current.positionRatio, dt);
        easing.dampQ(state.camera.quaternion, targetRef.current.quaternion, targetRef.current.quaternionRatio, dt);
    });
    return (
        <group ref={roomRef}>
            <Center position-y={15}>
                <Text3D font="/assets/fonts/oswald_bold.json" scale={2}>
                    HI, I'M JÉRÉMIE!
                    <meshStandardMaterial color="#eeeeee" metalness={0.8} roughness={0.5} />
                </Text3D>
            </Center>
            <Center position-y={12}>
                <Text3D font="/assets/fonts/oswald_regular.json" scale={1.2}>
                    (CLICK ANYWHERE TO EXPLORE)
                    <meshStandardMaterial color="#777777" metalness={0.5} roughness={0.5} />
                </Text3D>
            </Center>
            <IPhone ref={iphoneRef} />
            <Macbook ref={macbookRef} />
            <Resume ref={resumeRef} />
            <Desk />
            {/* <Lamp /> */}
        </group>
    );
};
