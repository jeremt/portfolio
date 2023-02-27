import styled from '@emotion/styled';
import {Html} from '@react-three/drei';
import {Div} from '../../ui/Div';
import {MacbookWindow} from './MacbookWindow';

const MacbookHtml = styled(Html)`
    width: 334px;
    height: 216px;
    background-image: url('/assets/images/background.png');
    background-size: cover;
    pointer-events: none;
`;

export const MacbookScreen = () => {
    return (
        <MacbookHtml rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
            <MacbookWindow />
        </MacbookHtml>
    );
};
