export class QuestionGroup {
    public name: string;
    public questions: any[];

    constructor(data?: any) {
        const defaults = {
            name: '',
            questions: [],
            ...data
        };

        this.name = defaults.name;
        this.questions = defaults.questions;
    }
}