import {useTexture} from '@react-three/drei';
import type {FC} from 'react';

export const Board: FC = () => {
    const map = useTexture('/images/board.png');
    return (
        <mesh receiveShadow rotation-x={-Math.PI / 2} position-z={-1}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={map} />
        </mesh>
    );
};
