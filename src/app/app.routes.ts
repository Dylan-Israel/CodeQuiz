import { Routes } from '@angular/router';

import { HomePageComponent } from '../home-page';
import { NotFoundComponent } from '../not-found';
import { TopicInfoComponent } from '../topic-info';
import { TopicQuizComponent } from '../topic-quiz';
import { AdminComponent, AdminEditComponent } from '../admin';

// TODO - Add Route Guards
export const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'topic/:topicId', component: TopicInfoComponent },
    { path: 'topic/:topicId/quiz', component: TopicQuizComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/edit/:id', component: AdminEditComponent },
    { path: '**', component: NotFoundComponent }
];
