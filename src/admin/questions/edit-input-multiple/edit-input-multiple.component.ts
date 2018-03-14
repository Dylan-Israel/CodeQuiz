import { Component, Input } from '@angular/core';

@Component({
    selector: 'edit-input-multiple',
    templateUrl: './edit-input-multiple.component.html',
    styleUrls: ['./edit-input-multiple.component.css']
})
export class EditInputMultiple {
    @Input() public question: any;
}