import { QuestionType, QuestionTopic, Answer } from "../../";

export class MultipleChoiceMultiple {
    public id: string;
    public questionTopic: QuestionTopic;
    public questionType: QuestionType;
    public questionText: string;
    public answers: Answer[];
    public options: number;
    public helpInfo: string;

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.MultipleChoiceMultiple,
            questionText: '',
            answers: [new Answer()],
            helpInfo: '',
            options: 1,
            ...data
        };

        this.questionType = defaults.questionType;
        this.questionText = defaults.questionText;
        this.answers = defaults.answers;
        this.helpInfo = defaults.helpInfo;
        this.questionTopic = defaults.questionTopic;
        this.options = defaults.options;
        this.id = defaults.id;
    }
}