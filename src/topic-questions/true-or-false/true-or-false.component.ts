import { Component, Input } from '@angular/core';

@Component({
    selector: 'true-or-false',
    templateUrl: './true-or-false.component.html',
    styleUrls: ['./true-or-false.component.css']
})
export class TrueOrFalseComponent {
    @Input() public question;
}