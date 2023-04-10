import {FC, ReactNode, useRef, useState} from 'react';
import * as THREE from 'three';
import {RoundedBox, Text, useCursor} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';

export const ContactLink: FC<JSX.IntrinsicElements['group'] & {name: string; link: string; icon: ReactNode}> = ({name, link, icon, ...props}) => {
    const [hovered, hover] = useState(false);
    const iconRef = useRef<THREE.Group>(null);
    useFrame(() => {
        iconRef.current!.position.y = THREE.MathUtils.lerp(iconRef.current!.position.y, hovered ? 0.5 : 0.2, 0.1);
    });
    useCursor(hovered);
    return (
        <group {...props} onPointerEnter={() => hover(true)} onPointerLeave={() => hover(false)} onClick={() => window.open(link)}>
            <RoundedBox castShadow position-y={-0.75} args={[1, 0.5, 1]} radius={0.05}>
                <meshStandardMaterial color="#333333" />
            </RoundedBox>
            <group ref={iconRef}>{icon}</group>
            <Text
                font="/fonts/Inter-Bold.woff"
                characters="GithubInsagrmLked"
                textAlign="left"
                color={hovered ? '#fcd37d' : '#aaaaaa'}
                position={[0, 1.2, 0]}
                scale={0.3}
            >
                {name}
            </Text>
        </group>
    );
};
