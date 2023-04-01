export interface RangeModel {
    type: 'cross' | 'diamond' | 'square';
    min: number;
    max: number;
    color: string;
}

export interface CardModel {
    url: string;
    index: number;
    range?: RangeModel;
}
