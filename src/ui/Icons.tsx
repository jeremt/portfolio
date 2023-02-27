import type {FC} from 'react';

export const Close: FC<{color?: string; className?: string}> = ({color, className}) => {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="2.22217" width="3.14269" height="25.1415" rx="1.57135" transform="rotate(-45 0 2.22217)" fill={color} />
            <rect x="2.22217" y="19.9999" width="3.14269" height="25.1415" rx="1.57134" transform="rotate(-135 2.22217 19.9999)" fill={color} />
        </svg>
    );
};
