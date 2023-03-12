import styled from '@emotion/styled';
import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';

import {Box} from '../ui/Box';
import {Room} from './Room';
import {AccumulativeShadows, ContactShadows, Environment, OrbitControls, RandomizedLight} from '@react-three/drei';
import {useMedia} from 'react-use';
import Link from 'next/link';

const Menu = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    /* width: 70px;
    height: 70px;
    border-radius: 0 10px 40px 10px;
    background-color: white; */
    a {
        font-family: Oswald;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        font-size: 2em;
        &:hover {
            color: white;
        }
    }
`;

export const Scene = () => {
    const isMobile = useMedia('(max-width: 800px)');
    return (
        <>
            <Canvas shadows camera={{position: [0, 20, 50], fov: isMobile ? 60 : 45}}>
                {/* <ambientLight color="#a4d1fc" intensity={0.7} /> */}
                {/* <pointLight position={[-15, 0, 20]} color="#ffffff" /> */}
                {/* <directionalLight position={[50, 50, 50]} castShadow /> */}
                <Suspense fallback={null}>
                    <Room />
                    <ContactShadows position={[0, -18, 0]} opacity={0.6} scale={130} blur={1} far={40} />
                    <Environment files="/assets/images/photo_studio_01_4k.hdr" />
                </Suspense>
                {/* <OrbitControls /> */}
            </Canvas>
            {/* <Menu direction="y" align="center" distribute="center">
                <Link href="#">HOME</Link>
                <Link href="#projects">PROJECTS</Link>
                <Link href="#resume">RESUME</Link>
                <Link href="#contact">CONTACT</Link>
            </Menu> */}
        </>
    );
};
