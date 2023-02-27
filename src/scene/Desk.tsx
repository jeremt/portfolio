import {Box, Cylinder, MeshReflectorMaterial} from '@react-three/drei';
import {FC} from 'react';

export const Desk: FC = () => {
    return (
        <group>
            <Box castShadow receiveShadow position={[0, -0.5, 4]} args={[30, 0.5, 12]}>
                {/* <MeshReflectorMaterial
                    mirror={2}
                    blur={[300, 30]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={80}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#202020"
                    metalness={0.8}
                /> */}
                <meshStandardMaterial color={'#2d2d30'} metalness={0.4} roughness={0.1} />
            </Box>
            <Cylinder castShadow position={[-13, -7.6, 0]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#a6b8c5" metalness={1} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[13, -7.6, 0]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#a6b8c5" metalness={1} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[-13, -7.6, 8]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#a6b8c5" metalness={1} roughness={0} />
            </Cylinder>
            <Cylinder castShadow position={[13, -7.6, 8]} args={[0.5, 0.5, 15]}>
                <meshStandardMaterial color="#a6b8c5" metalness={1} roughness={0} />
            </Cylinder>
        </group>
    );
};
