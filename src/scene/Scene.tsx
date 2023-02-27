import styled from '@emotion/styled';
import {MathUtils} from 'three';
import {Suspense, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {ContactShadows, Environment, OrbitControls, Plane, useTexture} from '@react-three/drei';
import * as THREE from 'three';
import {Div} from '../ui/Div';
import {Room} from './Room';

const Header = styled(Div)`
    position: absolute;
    top: 0;
    z-index: 1;
    color: #eeeeee;
    h1,
    h2 {
        margin: 0;
        text-align: center;
    }
    h2 {
        color: hsla(0, 0%, 95%, 0.5);
        font-size: 1.2em;
        font-weight: 400;
    }
    width: 100%;
`;

export const Scene = () => {
    THREE.ColorManagement.legacyMode = false;
    return (
        <>
            {/* <Header direction="y" padding="40px 0" spacing="10px">
                <h1>Hello, I’m Jérémie 👋</h1>
                <h2>Click to explore</h2>
            </Header> */}
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
