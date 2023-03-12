import {Center, Html, Plane, Text3D, useCursor, useTexture} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import Image from 'next/image';
import {forwardRef, useEffect, useRef, useState} from 'react';
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

export const Resume = forwardRef<THREE.Group>((_, ref) => {
    const [hovered, hover] = useState(false);
    const [focused, focus] = useState(false);
    const map = useTexture('/assets/images/resume.jpg');
    useCursor(hovered);
    useEffect(() => {
        if (location.hash === '#resume') {
            focus(true);
        }
    }, []);
    return (
        <group ref={ref} position={[8, 0, 6]} rotation={[-Math.PI / 2, 0, -0.1]}>
            <Center position-z={3} rotation={[Math.PI / 2, 0, 0]}>
                <Text3D visible={hovered && !focused} scale={1} font="/assets/fonts/oswald_regular.json">
                    RESUME
                </Text3D>
            </Center>
            <Plane
                position-y={0.1}
                name="resume"
                args={[595 * 2, 842 * 2]}
                scale={0.003}
                onClick={() => {
                    location.hash = '#resume';
                    focus(true);
                }}
                onPointerMissed={() => {
                    location.hash = '';
                    focus(false);
                }}
                onPointerOver={e => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
            >
                <Html transform position={[0, 0, 0]} scale={80}>
                    {focused && <AppearImage src="/assets/images/resume.jpg" priority alt="Resume" width={595} height={842} />}
                </Html>
                <meshStandardMaterial map={map} />
            </Plane>
        </group>
    );
});
