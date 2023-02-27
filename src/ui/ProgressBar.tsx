import styled from '@emotion/styled';

export const ProgressBar = styled.div`
    height: 12px;
    margin: 0 20px;
    position: relative;
    flex-grow: 1;
    border-radius: 6px;
    background-color: hsla(0, 0%, 100%, 0.1);
`;

export const Progress = styled.div<{value: number; color: string; animated?: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    right: ${props => (1 - props.value) * 100}%;
    bottom: 0;
    border-radius: 6px;
    transition: ${props => (props.animated ? `0.5s right` : undefined)};

    background-color: ${props => props.color};
`;
