import {useEffect, useMemo, useState} from 'react';
import type {FC} from 'react';

import {Bear} from './Bear';
import {Duck} from './Duck';
import {RangeModel} from '../data/CardModel';

interface PawnProps {
    skin: 'bear' | 'duck';
    x: number;
    y: number;
    range?: RangeModel;
}

const generateRange = (range: RangeModel) => {
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

const Tile: FC<{tile: {x: number; y: number}; color: string}> = ({tile, color}) => {
    const [hovered, hover] = useState(false);
    return (
        <mesh
            onPointerEnter={() => hover(true)}
            onPointerLeave={() => hover(false)}
            receiveShadow
            rotation-x={-Math.PI / 2}
            position-y={0.01}
            position-x={0.64 * tile.x}
            position-z={0.64 * tile.y}
        >
            <planeGeometry args={[0.6, 0.6]} />
            <meshStandardMaterial color={hovered ? '#27d527' : color} />
        </mesh>
    );
};

export const Pawn: FC<PawnProps> = ({skin, x, y, range}) => {
    const skinMesh = skin === 'bear' ? <Bear /> : <Duck />;
    const positions = useMemo(
        () => (range ? generateRange(range).filter(({x: tx, y: ty}) => tx + x >= 0 && tx + x <= 11 && ty + y >= 0 && ty + y <= 11) : []),
        [range, x, y],
    );
    return (
        <group position={[-3.5 + 0.64 * x, 0, -4.5 + 0.64 * y]}>
            {skinMesh}
            {range && positions.map((tile, i) => <Tile key={i} tile={tile} color={range.color} />)}
        </group>
    );
};
