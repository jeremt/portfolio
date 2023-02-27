import * as THREE from 'three';
import {useFrame, useThree} from '@react-three/fiber';
import {easing} from 'maath';
import {useRef} from 'react';

import {Desk} from './Desk';
import {Lamp} from './Lamp';
import {Resume} from './Resume';
import {Macbook} from './macbook/Macbook';
import {IPhone} from './iphone/IPhone';

interface CameraTarget {
    position: THREE.Vector3;
    positionRatio: number;
    quaternion: THREE.Quaternion;
    quaternionRatio: number;
}

export const Room = () => {
    const ref = useRef(null);
    const {camera} = useThree();
    const target: CameraTarget = {
        position: camera.position.clone(),
        positionRatio: 0,
        quaternion: camera.quaternion.clone(),
        quaternionRatio: 0,
    };

    const resetCamera = () => {
        const oldPos = camera.position.clone();
        const oldQuat = camera.quaternion.clone();

        camera.position.set(0, 20, 50);
        camera.lookAt(0, 0, 0);

        target.position.copy(camera.position);
        target.positionRatio = 0.6;
        target.quaternion.copy(camera.quaternion);
        target.quaternionRatio = 0.4;

        camera.position.copy(oldPos);
        camera.quaternion.copy(oldQuat);
    };

    useFrame((state, dt) => {
        easing.damp3(state.camera.position, target.position, target.positionRatio, dt);
        easing.dampQ(state.camera.quaternion, target.quaternion, target.quaternionRatio, dt);
    });
    return (
        <group ref={ref}>
            <Lamp />
            <IPhone
                onFocus={(p, q) => {
                    target.position.copy(p);
                    target.positionRatio = 0.4;
                    target.quaternion.copy(q);
                    target.quaternionRatio = 0.6;
                }}
            />
            <Macbook
                onFocus={(p, q) => {
                    target.position.copy(p);
                    target.positionRatio = 0.4;
                    target.quaternion.copy(q);
                    target.quaternionRatio = 0.6;
                }}
                onBlur={resetCamera}
            />
            <Resume
                onFocus={(p, q) => {
                    target.position.copy(p);
                    target.positionRatio = 0.4;
                    target.quaternion.copy(q);
                    target.quaternionRatio = 0.6;
                }}
                onBlur={resetCamera}
            />
            <Desk />
        </group>
    );
};
