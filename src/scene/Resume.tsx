import {Plane, useCursor, useTexture} from '@react-three/drei';
import {useLoader, useThree} from '@react-three/fiber';
import {useState} from 'react';
import type {FC} from 'react';
import * as THREE from 'three';

interface ResumeProps {
    onFocus: (position: THREE.Vector3, quaternion: THREE.Quaternion) => void;
    onBlur: () => void;
}

export const Resume: FC<ResumeProps> = ({onFocus, onBlur}) => {
    const map = useLoader(THREE.TextureLoader, '/assets/images/resume.jpg');
    // const {renderer} = useThree();
    // map.magFilter = THREE.LinearFilter;
    // map.minFilter = THREE.LinearFilter;
    // map.minFilter = THREE.NearestFilter;
    // map.minFilter = THREE.NearestMipmapNearestFilter;
    // map.anisotropy = 16;
    // map.generateMipmaps = false;
    const [hovered, hover] = useState(false);
    const [focused, focus] = useState(false);
    const {camera} = useThree();

    useCursor(hovered);
    return (
        <Plane
            name="resume"
            args={[595 * 2, 842 * 2]}
            scale={0.003}
            position={[8, 0, 6]}
            rotation={[-Math.PI / 2, 0, -0.1]}
            onClick={e => {
                const oldPos = camera.position.clone();
                const oldQuat = camera.quaternion.clone();
                camera.position.copy(e.object.position.clone().setY(7));
                camera.lookAt(e.object.position);
                onFocus(camera.position, camera.quaternion);
                focus(true);
                camera.position.copy(oldPos);
                camera.quaternion.copy(oldQuat);
            }}
            onPointerMissed={onBlur}
            onPointerOver={e => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
        >
            <meshStandardMaterial map={map} />
        </Plane>
    );
};
