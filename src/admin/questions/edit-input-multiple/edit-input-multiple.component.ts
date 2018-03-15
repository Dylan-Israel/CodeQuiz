import { Component, Input } from '@angular/core';

import { InputMultiple, Answer } from '../../../models';

@Component({
    selector: 'edit-input-multiple',
    templateUrl: './edit-input-multiple.component.html',
    styleUrls: ['./edit-input-multiple.component.css']
})
export class EditInputMultipleComponent {
    @Input() public question: InputMultiple;

    // TODO - Remove
    public ngOnInit(): void {
        this.question = new InputMultiple();
        console.log(this.question)
    }

    public addAnswer(): void {
        console.log(this.question)
        this.question.answers.push(new Answer());

    }

    public removeAnswer(index: number): void {
        this.question.answers.splice(index,1);
    }
}