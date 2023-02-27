import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import {useRef, useMemo, useState, useEffect, useCallback} from 'react';
import type {FC, ReactNode, MouseEvent} from 'react';

import {backdropInAnimation, backdropOutAnimation, lightboxNoneAnimation} from './lightboxAnims';
import type {AnimType} from './lightboxAnims';
import {css} from '@emotion/css';

interface BackdropProps {
    isOpen: boolean;
    noAnim: boolean;
    //
    blur: number;
    opacity: number;
    background: string;
}

const Backdrop = styled.div<BackdropProps>`
    z-index: 1;
    //
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    position: absolute;
    //
    opacity: ${props => props.opacity};
    background: ${props => props.background};
    backdrop-filter: ${props => (props.blur > 0 ? `blur(${props.blur}px)` : 'none')};
    //
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    //
    animation: ${props => css`0.3s ease-in-out ${props.noAnim ? lightboxNoneAnimation : props.isOpen ? backdropInAnimation : backdropOutAnimation}`} forwards;
`;

interface LightboxProps {
    root?: HTMLElement | null;
    isOpen: boolean;
    children?: ReactNode;
    animation?: AnimType;
    //
    backdrop?: {
        blur?: number;
        opacity?: number;
        background?: string;
    };
    //
    onClose?: () => void;
    onRequestClose?: () => void;
}

export const Lightbox: FC<LightboxProps> = ({children, root, isOpen, animation, backdrop, onRequestClose, onClose}) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    const [showBox, setShowBox] = useState(isOpen);

    const handleRequestClose = useCallback(
        (e: MouseEvent) => {
            if (e.target === backdropRef.current) {
                onRequestClose?.();
            }
        },
        [onRequestClose],
    );

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (isOpen === false) {
            timeout = setTimeout(
                () => {
                    setShowBox(false);
                    onClose?.();
                },
                animation === 'none' ? 0 : 0.3 * 1000,
            );
        } else {
            setShowBox(true);
        }
        return () => {
            if (timeout !== null) {
                clearTimeout(timeout);
            }
        };
    }, [animation, isOpen, onClose]);
    if (!showBox) {
        return null;
    }

    return ReactDOM.createPortal(
        <Backdrop
            ref={backdropRef}
            blur={backdrop?.blur || 0}
            isOpen={isOpen}
            noAnim={(animation || 'center') === 'none'}
            opacity={backdrop?.opacity || 1}
            background={backdrop?.background || 'hsla(0, 0%, 0%, 0.5)'}
            //
            onMouseDown={handleRequestClose}
        >
            {children}
        </Backdrop>,
        root || document.body,
    );
};
