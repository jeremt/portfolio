export interface NodeModel {
    type: 'guide' | 'quiz' | 'exercise';
    slug: string;
    index: number;
}

export interface AreaModel {
    type: 'area';
    name: string;
    nodes: NodeModel[];
}

export interface WorldModel {
    areas: AreaModel[];
}
