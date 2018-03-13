import { Component, Input } from '@angular/core';

@Component({
    selector: "multiple-choice-multiple",
    templateUrl: "./multiple-choice-multiple.component.html",
    styleUrls: ["./multiple-choice-multiple.component.css"]
})
export class MultipleQuestionMultipleComponent {
    @Input() public question;

    public toggleSelectedValue(input: String): void {
        const containsAnswer = this.question.answers.includes(input);

        if (containsAnswer) {
            this.question.answers = this.question.answers.filter((answer: string) => {
                return answer != input;
            });
        } else {
            this.question.answers.push(input);
        }
    }
}