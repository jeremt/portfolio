import {Box, Cylinder, MeshReflectorMaterial} from '@react-three/drei';
import {FC} from 'react';

export const Desk: FC = () => {
    return (
        <group>
            <Box castShadow receiveShadow position={[0, -0.5, 4]} args={[30, 0.5, 12]}>
                <meshStandardMaterial color={'#2d2d30'} metalness={0.4} roughness={0.3} />
            </Box>
            <Cylinder castShadow position={[-13, -7.6, 0]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[13, -7.6, 0]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[-13, -7.6, 8]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[13, -7.6, 8]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0} />
            </Cylinder>
        </group>
    );
};
