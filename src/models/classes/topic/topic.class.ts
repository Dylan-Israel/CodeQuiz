export class Topic {
    public id: string;
    public topicName: string;
    public topicDescription: string;
    public isActive: boolean;
    public difficulty: string;
    public questions?: any[];

    constructor(data?: any) {
        const defaults = {
            isActive: false,
            ...data
        };
        
        this.id = defaults.id;
        this.topicName = defaults.topicName;
        this.topicDescription = defaults.topicDescription;
        this.isActive = defaults.isActive;
        this.difficulty = defaults.difficulty;
        this.questions = defaults.questions;
    }
}