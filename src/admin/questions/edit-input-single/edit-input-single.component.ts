import { Component, Input } from '@angular/core';

@Component({
    selector: 'edit-input-single',
    templateUrl: './edit-input-single.component.html',
    styleUrls: ['./edit-input-single.component.css']
})
export class EditInputSingle {
    @Input() public question: any;
}