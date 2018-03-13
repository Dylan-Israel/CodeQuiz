import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-single',
    templateUrl: './input-single.component.html',
    styleUrls: ['./input-single.component.css']
})
export class InputSingleComponent {
    @Input() public question;
}