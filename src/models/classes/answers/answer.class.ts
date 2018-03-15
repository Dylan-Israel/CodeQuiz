export class Answer {
    public answer: string;

    constructor(data?: any) {
        const defaults = {
            answer: '',
            ...data
        };

        this.answer = defaults.answer;
    }
}