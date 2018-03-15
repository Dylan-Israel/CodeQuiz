import { Component, Input } from '@angular/core';

import { MultipleChoiceMultiple } from '../../../models';

@Component({
    selector: 'edit-choice-single',
    templateUrl: './edit-choice-single.component.html',
    styleUrls: ['./edit-choice-single.component.css']
})
export class EditChoiceSingleComponent {
    @Input() public question: MultipleChoiceMultiple;

        // TODO - Remove
        public ngOnInit(): void {
            this.question = new MultipleChoiceMultiple();
            console.log(this.question)
        }
}