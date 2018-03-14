import { Component, OnInit } from '@angular/core';

import { Topic, TopicDifficulty } from '../../models';

@Component({
    selector: 'admin-main',
    templateUrl: './admin-main.component.html',
    styleUrls: ['./admin-main.component.css']
})
export class AdminComponent implements OnInit {
    public topicList: Topic[] = [];

    public ngOnInit(): void {
        this.topicList.push(
            new Topic({id: 0, topicName: 'JavaScript', topicDescription: 'JS is the best!', difficulty: TopicDifficulty.Easy}), 
            new Topic({id: 1, topicName: 'HTML5', topicDescription: 'HTML5 is alright', difficulty: TopicDifficulty.Easy}))
    }
}