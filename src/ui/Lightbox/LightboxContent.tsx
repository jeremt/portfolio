import styled from '@emotion/styled';
import {Box} from '../Box';
import {animData} from './lightboxAnims';
import type {AnimType} from './lightboxAnims';

export const LightboxContent = styled(Box)<{isOpen: boolean; animation?: AnimType; easing?: string; duration?: number; delay?: number}>`
    border-radius: 20px;
    background-color: #222222;
    animation: ${props => props.duration || 0.3}s ${props => props.easing || 'ease-out'} ${props => props.delay || 0}s
        ${props => (props.isOpen ? animData[props.animation || 'center'].in : animData[props.animation || 'center'].out)} forwards;
`;
