export interface AnswerI {
    isCorrect: boolean;
    answer: string;
}

interface QuestionI {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export class Question implements QuestionI {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

    constructor(
        category: string,
        correct_answer: string,
        difficulty: string,
        incorrect_answers: string[],
        question: string,
        type: string
    ) {
        this.category = category;
        this.correct_answer = correct_answer;
        this.difficulty = difficulty;
        this.incorrect_answers = incorrect_answers.map(inc_answ => inc_answ);
        this.question = question;
        this.type = type;
    }

    static encodeQuestion(question: Question): Question {
        let encoded = { ...question } as Question;
        encoded.correct_answer = atob(encoded.correct_answer);
        encoded.category = atob(encoded.category);
        encoded.difficulty = atob(encoded.difficulty);
        encoded.question = atob(encoded.question);
        encoded.type = atob(encoded.type);
        encoded.incorrect_answers = encoded.incorrect_answers.map(answer => atob(answer));
        return encoded;
    }
}