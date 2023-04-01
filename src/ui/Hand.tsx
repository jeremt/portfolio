import styled from '@emotion/styled';
import type {FC} from 'react';
import type {CardModel} from '../data/CardModel';
import {Div} from './Div';

interface HandProps {
    selectedCard?: CardModel;
    onSelect: (card?: CardModel) => void;
    cards: CardModel[];
}

const Container = styled(Div)`
    position: absolute;
    bottom: 0;
`;

const Card = styled.div<{selected: boolean; card: CardModel}>`
    width: 150px;
    height: 225px;
    cursor: pointer;
    z-index: ${props => (props.selected ? 2 : undefined)};
    will-change: transform;
    border-radius: 15px;
    background-image: ${props => `url(${props.card.url})`};
    background-size: 100% 100%;
    transform: ${props =>
        props.selected
            ? 'scale(1.4) translateY(-40px)'
            : `rotate(${props.card.index * 10 - 25}deg) scale(1.2) translateY(${Math.abs(props.card.index * 30 - 60) + 20}px)`};
    transition: transform 0.3s;
    &:hover {
        transform: ${props =>
            props.selected
                ? 'scale(1.4) translateY(-40px)'
                : `rotate(${props.card.index * 10 - 25}deg) scale(1.3) translateY(${Math.abs(props.card.index * 30 - 60) + 20}px)`};
        z-index: 2;
    }
`;

export const Hand: FC<HandProps> = ({selectedCard, onSelect, cards}) => {
    return (
        <Container distribute="center" width="100%">
            {cards.map(card => (
                <Card
                    key={card.index}
                    selected={selectedCard ? card.index === selectedCard.index : false}
                    card={card}
                    onClick={() => onSelect(card.index === selectedCard?.index ? undefined : card)}
                />
            ))}
        </Container>
    );
};
