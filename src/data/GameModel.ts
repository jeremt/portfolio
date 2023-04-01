import {CardModel} from './CardModel';

interface PlayerModel {
    skin: 'bear' | 'duck';
    health: number;
    position: {x: number; y: number};
    //
    selectedCard: CardModel;
    hand: CardModel[];
    pile: CardModel[];
    discarded: CardModel[];
}

export interface GameModel {
    currentPlayer: PlayerModel;
    players: PlayerModel[];
}
