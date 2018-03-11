import { QuestionType, QuestionTopic } from "../../";

export class TrueOrFalse {
    public id: string;
    public questionTopic: QuestionTopic;
    public questionType: QuestionType;
    public questionText: String;
    public answer: boolean;
    public helpInfo: string;

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.TrueOrFalse,
            questionText: '',
            helpInfo: '',
            ...data
        };

        this.questionType = defaults.questionType;
        this.questionText = defaults.questionText;
        this.answer = defaults.answer;
        this.helpInfo = defaults.helpInfo;
        this.questionTopic = defaults.questionTopic;
        this.id = defaults.id;
    }
}