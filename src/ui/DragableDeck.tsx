import styled from '@emotion/styled';
import {useDrag} from 'react-use-gesture';
import {useState} from 'react';
import {animated, interpolate, useSprings} from '@react-spring/web';
import type {FC} from 'react';

import type {CardModel} from '../data/CardModel';

const Container = styled(animated.div)`
    position: absolute;
    bottom: 0;
    margin: auto;
    width: 100%;
    will-change: transform;
    touch-action: none;
`;

const Card = styled(animated.div)<{url: string}>`
    width: 200px;
    height: 300px;
    cursor: grab;
    will-change: transform;
    border-radius: 15px;
    background-image: ${props => `url(${props.url})`};
    background-size: 100% 100%;
    &:active {
        cursor: grabbing;
        z-index: 2;
    }
`;

const from = (_: number) => ({x: 0, y: 0, rot: 0, scale: 0.5});
const to = (i: number) => ({
    x: 400 + i * 100,
    y: Math.abs(i * 20 - 40) + 20,
    scale: 1,
    rot: i * 10 - 25,
    delay: i * 100,
});
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) => `perspective(1500px) rotateZ(${r}deg) scale(${s})`;

export const DragableDeck: FC<{cards: CardModel[]}> = ({cards}) => {
    const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    })); // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({args: [index], down, movement: [mx, my], direction: [xDir], velocity}) => {
        const trigger = mx < -80; // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
        if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        api.start(i => {
            if (index !== i) return; // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index);
            const x = isGone ? (200 + window.innerWidth) * dir : down ? 400 + i * 100 + mx : 400 + i * 100; // When a card is gone it flys out left or right, otherwise goes back to zero
            const y = isGone ? (200 + window.innerHeight) * dir : down ? Math.abs(i * 20 - 40) + 20 + my : 400 + i * 100; // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 0.3 : 1; // Active cards lift up a bit
            return {
                x,
                y,
                rot,
                scale,
                delay: undefined,
                config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500},
            };
        });
        if (!down && gone.size === cards.length)
            setTimeout(() => {
                gone.clear();
                api.start(i => to(i));
            }, 600);
    });
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (
        <>
            {props.map(({x, y, rot, scale}, i) => (
                <Container key={i} style={{x, y}}>
                    {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                    <Card {...bind(i)} url={cards[i]!.url} style={{transform: interpolate([rot, scale], trans)}} />
                </Container>
            ))}
        </>
    );
};
