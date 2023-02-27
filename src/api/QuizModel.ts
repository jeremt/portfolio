interface Question {
    question: string;
    answers: string[];
    solution: number;
    explanations?: string;
}

export interface QuizModel {
    slug: string;
    title: string;
    questions?: Question[];
}
