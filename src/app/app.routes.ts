import { Routes } from '@angular/router';

import { HomePageComponent } from '../home-page';
import { NotFoundComponent } from '../not-found';
import { TopicInfoComponent } from '../topic-info';
import { TopicQuizComponent } from '../topic-quiz';

export const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'topic/:topicId', component: TopicInfoComponent },
    { path: 'topic/:topicId/quiz', component: TopicQuizComponent },
    { path: '**', component: NotFoundComponent }
];
