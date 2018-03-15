import { QuestionType, QuestionTopic, Answer } from "../../";

export class InputMultiple {
    public id: string;
    public questionTopic: QuestionTopic;
    public questionType: QuestionType;
    public questionText: string;
    public answers: Answer[];
    public helpInfo: string;

    constructor(data?: any) {
        const defaults = {
            questionType: QuestionType.InputMultiple,
            questionText: '',
            answers: [new Answer()],
            helpInfo: '',
            ...data
        };

        this.questionType = defaults.questionType;
        this.questionText = defaults.questionText;
        this.answers = defaults.answers;
        this.helpInfo = defaults.helpInfo;
        this.questionTopic = defaults.questionTopic;
        this.id = defaults.id;
    }
}