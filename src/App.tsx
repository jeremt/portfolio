import {Canvas} from '@react-three/fiber';
import {ContactShadows, Environment, Html, OrbitControls, Scroll, ScrollControls} from '@react-three/drei';
import type {FC} from 'react';
import './App.css';
import {Laptop} from './scene/Laptop';
import {Div} from './ui/Div';
import styled from '@emotion/styled';
import {Scene} from './scene/Scene';
import {EffectComposer, DepthOfField} from '@react-three/postprocessing';

const Container = styled(Scroll)`
    /* width: 100%; */
`;

// https://www.youtube.com/watch?v=52sTNIJs78A

const Page = styled.section<{index: number}>`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100dvh;
    height: 100vh;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding: 0 20px 50px 20px;
    left: ${props => props.index * 100}vw;
    box-sizing: border-box;
    font-family: Inter, sans-serif;

    h1 {
        margin: 0;
        color: white;
        font-size: 2rem;
        user-select: none;
    }
    h2 {
        margin: 0;
        font-size: 2rem;
        color: white;
        font-weight: bold;
    }
    h2 > a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #fcd37d;
            border-bottom: 2px solid #fcd37d;
        }
        user-select: none;
    }
    p {
        margin: 10px 0;
        color: #aaaaaa;
        line-height: 26px;
        text-align: center;
        user-select: none;
        max-width: 600px;
        font-family: Menlo, sans-serif;
        font-size: 0.8rem;
    }
    .btn {
        color: #fcd37d;
        text-decoration: none;
        border: 2px solid #fcd37d;
        padding: 10px 15px;
        font-family: Inter, sans-serif;
        font-size: 0.6rem;
        font-weight: bold;
        letter-spacing: 5px;
        text-transform: uppercase;
        transition: 0.3s all;
        &:hover {
            color: #222222;
            background-color: #fcd37d;
            letter-spacing: 6px;
        }
        &:active {
            letter-spacing: 5px;
        }
    }
`;

const Content = () => {
    return (
        <>
            <Page index={0}>
                <h1>I'm Jérémie 👋</h1>
                <p>
                    I’m french developer from Paris.
                    <br />
                    I like new projects, making experiments, games & learning new stuff!
                    <br />
                    Scroll for more 👉
                </p>
                <a className="btn" target="_blank" href="/resume.pdf">
                    Download resume
                </a>
            </Page>
            <Page index={1}>
                <h2>
                    <a href="https://voltapp.tech" rel="noreferer" target="_blank">
                        ⚡️ Voltapp
                    </a>
                </h2>
                <p>
                    Voltapp is a tool that allows people to create apps and websites without coding. I’m a co-founder of the company, mostly working on the
                    design & UX of the project as well as some engine core features and R&D development.
                </p>
                <a className="btn" href="https://voltapp.tech" rel="noreferer" target="_blank">
                    Open project
                </a>
            </Page>
            <Page index={2}>
                <h2>
                    <a href="https://js-journey.vercel.app/" rel="noreferer" target="_blank">
                        🌲 JS Journey
                    </a>
                </h2>
                <p>
                    JS Journey is a side project I’m making on my free time. This is a website to learn programming via Javascript from scratch. The idea is to
                    make a fun and progressive way to learn various concepts and best practices!
                </p>
                <a className="btn" href="https://js-journey.vercel.app/" rel="noreferer" target="_blank">
                    Open project
                </a>
            </Page>
            <Page index={3}>
                <h2>🐸 Frog</h2>
                <p>
                    Frog is a 2d platforming multiplayer game. We are currently developing the game using Godot game engine with 2 friends. One is in charge of
                    the pixel art, while I work on gameplay and other features with the other.
                </p>
            </Page>
            <Page index={4}>
                <h2>🥊 Bastoon</h2>
                <p>
                    Bastoon is a cards game from 2 to 4 players. Players are placed on a board and some cards are constrained by there range and the players
                    positions. I made only a few prototypes for now, but you can download the printable version with the link below!
                </p>
                <a className="btn" href="/bastoon.zip">
                    Download files
                </a>
            </Page>
            <Page index={5}>
                <h2>💼 Portfolio</h2>
                <p>
                    I created this portfolio to teach students how to use ThreeJS and bring some 3D to the web. Feel free to download and re-use the code to
                    create your own.
                </p>
                <a className="btn" href="https://github.com/jeremt/portfolio" rel="noreferer" target="_blank">
                    Get the code
                </a>
            </Page>
        </>
    );
};

export const App: FC = () => {
    return (
        <>
            <Canvas shadows camera={{aspect: 5}}>
                <ambientLight intensity={0.5} />
                <fog attach="fog" args={['#1B1C20', 5, 20]} />
                <ScrollControls pages={7} horizontal>
                    <Scene />
                    <Scroll html>
                        <Content />
                    </Scroll>
                </ScrollControls>
                {/* <OrbitControls /> */}
                {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} /> */}
                <ContactShadows position={[0, -1, 0]} color="#222222" scale={50} blur={1} far={10} />
                <Environment preset="city" />
            </Canvas>
        </>
    );
};
