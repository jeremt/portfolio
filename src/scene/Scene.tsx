import {FC, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {Laptop} from './Laptop';
import {Text3D, useScroll, useTexture} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useMedia} from 'react-use';
import {Briefcase} from './Briefcase';
import {Camera} from './Camera';
import {Computer} from './Computer';
import {ContactLink} from './ContactLink';

const textures = [
    '/images/project-voltapp.png',
    '/images/project-jsjourney.png',
    '/images/project-frog.png',
    '/images/project-bastoon.png',
    '/images/project-portfolio.png',
];

export const Scene: FC<JSX.IntrinsicElements['group']> = props => {
    const offset = 8;
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const maps = useTexture(textures);
    const isPhone = useMedia('(max-width: 700px)');
    const isTablet = useMedia('(max-width: 900px)');

    useFrame(() => {
        groupRef.current!.position.x = -scroll.offset * offset * (textures.length + 1);
    });
    return (
        <group rotation-y={0.5} position-z={isPhone ? -4 : isTablet ? -2.5 : 0}>
            <group ref={groupRef} position-x={scroll.offset}>
                <group position-y={0.5}>
                    <Text3D
                        castShadow
                        font="/fonts/Inter_Bold.json"
                        bevelEnabled
                        bevelSize={0.02}
                        bevelSegments={32}
                        curveSegments={128}
                        bevelThickness={0.01}
                        position-x={-2.8}
                        position-y={-0.9}
                        rotation-y={-0.5}
                        scale={1.2}
                    >
                        Hello!
                        <meshStandardMaterial color="#daceaa" roughness={0.15} metalness={0.8} />
                    </Text3D>
                </group>
                {textures.map((_, i) => (
                    <Laptop position-x={offset * (i + 1)} position-y={1} map={maps[i]} />
                ))}

                <group position-x={offset * (textures.length + 1)}>
                    <ContactLink rotation-y={-0.1} position-x={-2} name="Github" link="https://github.com/jeremt" icon={<Computer />} />
                    <ContactLink
                        rotation-y={-0.5}
                        position-z={0.4}
                        name="Linked In"
                        link="https://www.linkedin.com/in/jeremie-taboada-16495959/"
                        icon={<Briefcase />}
                    />
                    <ContactLink rotation-y={-1} position-x={1.3} position-z={1.8} name="Instagram" link="https://instagram.com/jeremtab" icon={<Camera />} />
                </group>
            </group>
        </group>
    );
};

for (const texture of textures) {
    useTexture.preload(texture);
}
