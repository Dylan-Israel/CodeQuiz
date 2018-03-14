import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { KeysPipe } from '../pipes/';
import { appRoutes } from './app.routes';
import { QuizService } from '../services';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '../not-found';
import { HomePageComponent } from '../home-page';
import { TopicInfoComponent } from '../topic-info';
import { TopicQuizComponent } from '../topic-quiz';
import { AdminComponent, AdminEditComponent } from '../admin'; 
import { 
  MultipleQuestionSingleComponent, 
  MultipleQuestionMultipleComponent, 
  TrueOrFalseComponent,
  InputSingleComponent,
  InputMultipleComponent   
} from '../topic-questions';
 
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    TopicInfoComponent,
    TopicQuizComponent,
    MultipleQuestionSingleComponent,
    MultipleQuestionMultipleComponent,
    TrueOrFalseComponent,
    InputSingleComponent,
    InputMultipleComponent,
    AdminComponent,
    AdminEditComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
