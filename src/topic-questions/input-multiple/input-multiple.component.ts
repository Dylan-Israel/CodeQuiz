import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'input-multiple',
    templateUrl: './input-multiple.component.html',
    styleUrls: ['./input-multiple.component.css']
})
export class InputMultipleComponent implements OnInit {
    @Input() public question;

    public ngOnInit() {
        this.convertOptionsToArray();
    }

    public convertOptionsToArray(): void {
        const placeHolderArray = [];
        for (let i = 0 ; i < this.question.options; i++ ) {
            placeHolderArray.push(i + 1);
        }

        this.question.options = placeHolderArray;
    }

}