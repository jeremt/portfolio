import styled from '@emotion/styled';
import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {ContactShadows, Environment, OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import {Box} from '../ui/Box';
import {Room} from './Room';

const Header = styled(Box)`
    position: absolute;
    z-index: 1;
    color: #eeeeee;
    h1,
    h2 {
        font-family: Oswald;
        margin: 0;
        text-align: center;
    }
    h2 {
        color: hsla(0, 0%, 95%, 0.5);
        font-size: 1em;
        font-weight: 400;
    }
    width: 100%;
`;

export const Scene = () => {
    const [hash, setHash] = useState('');
    useEffect(() => {
        window.addEventListener('hashchange', e => {
            // setHash(location.hash);
        });
    }, []);
    return (
        <>
            <Header hidden={true} direction="y" padding="60px 0" spacing="10px">
                <h1>Hello, I’m Jérémie 👋</h1>
                <h2>Click to explore</h2>
            </Header>
            <Canvas shadows camera={{position: [0, 20, 50], fov: 45}}>
                <Suspense fallback={null}>
                    <Room />
                    <ContactShadows position={[0, -15, 0]} opacity={0.6} scale={130} blur={1} far={40} />
                    <Environment preset="city" />
                </Suspense>
                {/* <OrbitControls /> */}
            </Canvas>
        </>
    );
};
