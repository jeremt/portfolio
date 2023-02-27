import {keyframes} from '@emotion/react';

// Backdrop anim

export const backdropInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const backdropOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

// Content anims

export const lightboxNoneAnimation = keyframes`
    from { }
    to { }
`;

export const lightboxFadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const lightboxFadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const lightboxCenterInAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(0.7);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;
export const lightboxCenterOutAnimation = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.7);
    }
`;

export const lightboxBottomInAnimation = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: initial;
    }
`;
export const lightboxBottomOutAnimation = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateY(100%);
    }
`;

export const lightboxTopInAnimation = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: initial;
    }
`;
export const lightboxTopOutAnimation = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateY(-100%);
    }
`;

export const lightboxLeftInAnimation = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: initial;
    }
`;
export const lightboxLeftOutAnimation = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateX(-100%);
    }
`;

export const lightboxRightInAnimation = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: initial;
    }
`;
export const lightboxRightOutAnimation = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateX(100%);
    }
`;

export const animData = {
    none: {in: lightboxNoneAnimation, out: lightboxNoneAnimation},
    fade: {in: lightboxFadeInAnimation, out: lightboxFadeOutAnimation},
    center: {in: lightboxCenterInAnimation, out: lightboxCenterOutAnimation},
    //
    top: {in: lightboxTopInAnimation, out: lightboxTopOutAnimation},
    left: {in: lightboxLeftInAnimation, out: lightboxLeftOutAnimation},
    right: {in: lightboxRightInAnimation, out: lightboxRightOutAnimation},
    bottom: {in: lightboxBottomInAnimation, out: lightboxBottomOutAnimation},
};

export type AnimType = keyof typeof animData;
