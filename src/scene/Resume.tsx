import {Html, Plane, useCursor, useTexture} from '@react-three/drei';
import {useLoader, useThree} from '@react-three/fiber';
import Image from 'next/image';
import {useCallback, useEffect, useRef, useState} from 'react';
import type {FC} from 'react';
import * as THREE from 'three';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

interface ResumeProps {
    onFocus: (position: THREE.Vector3, quaternion: THREE.Quaternion) => void;
    onBlur: () => void;
}

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const AppearImage = styled(Image)`
    animation: ${appear} 0.4s 0.5;
`;

export const Resume: FC<ResumeProps> = ({onFocus, onBlur}) => {
    const ref = useRef(null);
    const map = useLoader(THREE.TextureLoader, '/assets/images/resume.jpg');
    // const map = useTexture('/assets/images/resume.jpg');
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
    const applyFocus = useCallback(() => {
        const oldPos = camera.position.clone();
        const oldQuat = camera.quaternion.clone();
        camera.position.copy(ref.current.position.clone().setY(7));
        camera.lookAt(ref.current.position);
        onFocus(camera.position, camera.quaternion);
        focus(true);
        camera.position.copy(oldPos);
        camera.quaternion.copy(oldQuat);
    }, []);

    useCursor(hovered);
    useEffect(() => {
        if (location.hash === '#resume') {
            applyFocus();
        }
    }, []);
    return (
        <Plane
            ref={ref}
            name="resume"
            args={[595 * 2, 842 * 2]}
            scale={0.003}
            position={[8, 0, 6]}
            rotation={[-Math.PI / 2, 0, -0.1]}
            onClick={applyFocus}
            onPointerMissed={() => {
                focus(false);
                onBlur();
            }}
            onPointerOver={e => (e.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
        >
            <Html transform position={[0, 0, 0]} scale={80}>
                {focused && <AppearImage src="/assets/images/resume.jpg" priority alt="Resume" width={595} height={842} />}
            </Html>
            {/* <meshStandardMaterial map={map} /> */}
        </Plane>
    );
};
