import {useState, useCallback} from 'react';

export const useLightboxState = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    return {isOpen, open, close};
};
