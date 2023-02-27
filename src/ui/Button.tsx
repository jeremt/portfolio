import styled from '@emotion/styled';

export const Button = styled.button<{color: string}>`
    color: #222222;
    cursor: pointer;
    border: none;
    padding: 10px 15px;
    transition: all 0.2s;
    font-weight: 800;
    font-family: 'Nunito', sans-serif;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: ${props => props.color};
    &:disabled {
        color: #888888;
        cursor: default;
        pointer-events: none;
        background-color: hsla(0, 0%, 100%, 0.1);
    }
    &:hover {
        transform: scale(1.02);
    }
    &:active {
        transform: scale(0.95);
    }
`;
