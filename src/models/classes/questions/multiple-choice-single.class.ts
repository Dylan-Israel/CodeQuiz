import { QuestionType, QuestionTopic } from "../../";

export class MultipleChoiceSingle {
    public id: string;
    public questionTopic: QuestionTopic;
    public questionType: QuestionType;
    public questionText: string;
    public answer: string;
    public helpInfo: string;
    public options: string[];

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.MultipleChoiceSingle,
            questionText: '',
            answer: '',
            helpInfo: '',
            options: [],
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