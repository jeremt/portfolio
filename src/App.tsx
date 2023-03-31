import {Environment, OrbitControls, useTexture} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import {Bear} from './scene/Bear';
import {Duck} from './scene/Duck';

const Board = () => {
    const map = useTexture('/images/board.png');
    return (
        <mesh receiveShadow rotation-x={-Math.PI / 2} position-z={-1}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={map} />
        </mesh>
    );
};

type Range = {type: 'cross' | 'diamond' | 'square'; min: number; max: number};

interface PawnProps {
    skin: 'bear' | 'duck';
    x: number;
    y: number;
    range?: Range;
}

const generateRange = (range: Range) => {
    const positions = [];
    switch (range.type) {
        case 'cross':
            for (let i = range.min; i <= range.max; i++) {
                positions.push({x: i, y: 0});
                positions.push({x: -i, y: 0});
            }
            for (let i = range.min; i <= range.max; i++) {
                positions.push({x: 0, y: i});
                positions.push({x: 0, y: -i});
            }
            break;
        case 'square':
            for (let x = -range.max; x <= range.max; x++) {
                for (let y = -range.max; y <= range.max; ++y) {
                    if (x <= -range.min || x >= range.min || y <= -range.min || y >= range.min) {
                        positions.push({x, y});
                    }
                }
            }
            break;
        case 'diamond':
            for (let y = 0; y <= range.max; y++) {
                let lineWidth = y * 2 + 1;
                let start = range.max - y;
                for (let x = 0; x < lineWidth; x++) {
                    let xPos = start + x;
                    let yPos = y;

                    if (Math.abs(xPos - range.max) + Math.abs(yPos - range.max) >= range.min) {
                        positions.push({x: xPos - range.max, y: yPos - range.max});
                        // don't do middle line twice
                        if (y != range.max) {
                            positions.push({x: xPos - range.max, y: -yPos + range.max});
                        }
                    }
                }
            }
            break;
    }
    return positions;
};

const Pawn: FC<PawnProps> = ({skin, x, y, range}) => {
    const skinMesh = skin === 'bear' ? <Bear /> : <Duck />;
    const positions = useMemo(() => (range ? generateRange(range) : []), []);
    return (
        <group position={[-3.5 + 0.64 * x, 0, -4.5 + 0.64 * y]}>
            {skinMesh}
            {positions.map((tile, i) => (
                <mesh receiveShadow key={i} rotation-x={-Math.PI / 2} position-y={0.01} position-x={0.64 * tile.x} position-z={0.64 * tile.y}>
                    <planeGeometry args={[0.6, 0.6]} />
                    <meshStandardMaterial color="#E3BB42" />
                </mesh>
            ))}
        </group>
    );
};

export const App = () => {
    const [position, setPosition] = useState<[number, number]>([6, 6]);
    const [position2, setPosition2] = useState<[number, number]>([2, 2]);
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
        <Canvas shadows camera={{position: [0, 12, 15], fov: 35}}>
            <pointLight position={[10, 10, 10]} />
            <directionalLight castShadow intensity={0.3} position={[3, 8, 6]} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
            </directionalLight>
            {/* <OrbitControls /> */}
            <Pawn skin="bear" x={position[0]} y={position[1]} range={{type: 'diamond', min: 1, max: 2}} />
            <Pawn skin="duck" x={position2[0]} y={position2[1]} />
            <Board />
        </Canvas>
    );
};
