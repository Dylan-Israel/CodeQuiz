import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { TopicInfoDetails, topicInfo } from '../models';

@Component({
  selector: 'topic-info',
  templateUrl: './topic-info.component.html',
  styleUrls: ['./topic-info.component.css']
})
export class TopicInfoComponent {
    public topicInfo: TopicInfoDetails;

    constructor(public route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            if (params.topicId) {
                if (topicInfo.hasOwnProperty(params.topicId)) {
                    this.topicInfo = topicInfo[params.topicId];
                }
            }
        });
    }
}
