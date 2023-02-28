import styled from '@emotion/styled';
import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';

import {Box} from '../ui/Box';
import {Room} from './Room';
import {ContactShadows, Environment, OrbitControls} from '@react-three/drei';

const Menu = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 0 10px 40px 10px;
    background-color: white;
`;

export const Scene = () => (
    <>
        {/* <Menu direction="y" align="center" distribute="center">
            |||
        </Menu> */}
        <Canvas shadows camera={{position: [0, 20, 50], fov: 45}}>
            <ambientLight color="#a4d1fc" intensity={0.7} />
            <pointLight position={[-15, 0, 20]} color="#ffffff" />
            <Suspense fallback={null}>
                <Room />
                <ContactShadows position={[0, -15, 0]} opacity={0.6} scale={130} blur={1} far={40} />
                <Environment files="/assets/images/photo_studio_01_4k.hdr" />
            </Suspense>
            {/* <OrbitControls /> */}
        </Canvas>
    </>
);
