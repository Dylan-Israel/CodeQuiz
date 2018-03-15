import { Component, Input } from '@angular/core';
import { MultipleChoiceMultiple, Answer } from '../../../models';

@Component({
    selector: 'edit-choice-multiple',
    templateUrl: './edit-choice-multiple.component.html',
    styleUrls: ['./edit-choice-multiple.component.css']
})
export class EditChoiceMultipleComponent {
    @Input() public question: MultipleChoiceMultiple;

    // TODO - Remove
    public ngOnInit(): void {
        this.question = new MultipleChoiceMultiple();
        console.log(this.question)
    }

    public addAnswer(): void {
        this.question.answers.push(new Answer());
    }

    public removeAnswer(index: number): void {
        this.question.answers.splice(index, 1);
    }
}