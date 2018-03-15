import { Component, Input } from '@angular/core';

import { TrueOrFalse } from '../../../models';

@Component({
    selector: 'edit-true-or-false',
    templateUrl: './edit-true-or-false.component.html',
    styleUrls: ['./edit-true-or-false.component.css']
})
export class EditTrueOrFalseComponent {
    @Input() public question: TrueOrFalse;
}