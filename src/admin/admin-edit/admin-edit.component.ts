import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Topic, TopicDifficulty, QuestionType } from '../../models';

@Component({
    selector: 'admin-edit',
    templateUrl: './admin-edit.component.html',
    styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
    public quizTopic: Topic = new Topic();
    public topicDifficulties = TopicDifficulty;
    public questionTypes = QuestionType;

    constructor(public route: ActivatedRoute, public router: Router) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            const { id } = params;

            if (id) {
                if (id === 'new') {
                    this.quizTopic = new Topic({id, questions: [], answers: []});
                } else {
                    this.getQuizById(id);
                }
            } else {
                this.router.navigateByUrl('');
            }
        });
    }

    // TODO - Hit service to get quiz by id;
    public getQuizById(id: string): void {
        this.quizTopic = new Topic({id, questions: [], answers: []});
    }

    public addQuestion(): void {
        this.quizTopic.questions.push({questionType: null});
    }

}