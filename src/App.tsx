import {Canvas} from '@react-three/fiber';
import {useEffect, useMemo, useState} from 'react';
import {Html, OrbitControls} from '@react-three/drei';
import type {FC} from 'react';

import {Pawn} from './scene/Pawn';
import {Board} from './scene/Board';
import type {CardModel} from './data/CardModel';
import './App.css';
import {Hand} from './ui/Hand';

export const App: FC = () => {
    const [position, setPosition] = useState<[number, number]>([7, 7]);
    const [position2, setPosition2] = useState<[number, number]>([3, 4]);
    const [selectedCard, setSelectedCard] = useState<CardModel>();
    const cards = useMemo<CardModel[]>(
        () => [
            {index: 0, url: '/images/cards/1pas.png', range: {type: 'diamond', min: 1, max: 1, color: '#FFEAAB'}},
            {index: 1, url: '/images/cards/2pas.png', range: {type: 'diamond', min: 1, max: 2, color: '#FFEAAB'}},
            {index: 2, url: '/images/cards/2pas.png', range: {type: 'diamond', min: 1, max: 2, color: '#FFEAAB'}},
            {index: 3, url: '/images/cards/marteau-en-bois.png', range: {type: 'square', min: 1, max: 2, color: '#e3b798'}},
            {index: 4, url: '/images/cards/arc-en-bois.png', range: {type: 'diamond', min: 3, max: 5, color: '#e3b798'}},
        ],
        [],
    );

    useEffect(() => {
        document.addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.key === 'w') setPosition(p => [p[0], p[1] - 1]);
            if (e.key === 's') setPosition(p => [p[0], p[1] + 1]);
            if (e.key === 'a') setPosition(p => [p[0] - 1, p[1]]);
            if (e.key === 'd') setPosition(p => [p[0] + 1, p[1]]);
            if (e.key === 'i') setPosition2(p => [p[0], p[1] - 1]);
            if (e.key === 'k') setPosition2(p => [p[0], p[1] + 1]);
            if (e.key === 'j') setPosition2(p => [p[0] - 1, p[1]]);
            if (e.key === 'l') setPosition2(p => [p[0] + 1, p[1]]);
        });
    }, []);
    return (
        <>
            <Canvas shadows camera={{position: [0, 14, 12], fov: 35}}>
                <pointLight position={[10, 10, 10]} />
                <directionalLight castShadow intensity={0.3} position={[3, 8, 6]} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
                </directionalLight>
                <OrbitControls />
                <group position-z={-2}>
                    <Pawn skin="bear" x={position[0]} y={position[1]} range={selectedCard?.range} />
                    <Pawn skin="duck" x={position2[0]} y={position2[1]} />
                    <Board />
                </group>
            </Canvas>
            <Hand selectedCard={selectedCard} onSelect={setSelectedCard} cards={cards} />
        </>
    );
};
