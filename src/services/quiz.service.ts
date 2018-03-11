import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {

    constructor(public http: HttpClient) {}

    public getQuestion(): any {
        return;
    }
}