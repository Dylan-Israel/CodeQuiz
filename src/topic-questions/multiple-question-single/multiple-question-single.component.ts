import { Component, Input } from '@angular/core';

@Component({
    selector: "multiple-choice-single",
    templateUrl: "multiple-question-single.component.html",
    styleUrls: ["multiple-question-single.component.css"]
})
export class MultipleQuestionSingleComponent {
@Input() public question;
}