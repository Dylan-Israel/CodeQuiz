import { QuestionType, QuestionTopic } from "../../";

export class MultipleChoiceMultiple {
    public id: string;
    public questionTopic: QuestionTopic;
    public questionType: QuestionType;
    public questionText: string;
    public answer: string[];
    public options: string[];
    public helpInfo: string;

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.MultipleChoiceMultiple,
            questionText: '',
            answer: [],
            helpInfo: '',
            ...data
        };

        this.questionType = defaults.questionType;
        this.questionText = defaults.questionText;
        this.answer = defaults.answer;
        this.helpInfo = defaults.helpInfo;
        this.questionTopic = defaults.questionTopic;
        this.options = defaults.options;
        this.id = defaults.id;
    }
}