import { Component, Input } from '@angular/core';

import { InputSingle } from '../../../models';

@Component({
    selector: 'edit-input-single',
    templateUrl: './edit-input-single.component.html',
    styleUrls: ['./edit-input-single.component.css']
})
export class EditInputSingleComponent {
    @Input() public question: InputSingle;
}