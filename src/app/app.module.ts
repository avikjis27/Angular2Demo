import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
import { NavigationServiceService } from './navigation-service.service';
import { QuestionBankService } from './question-bank.service';
import { ResultComponent } from './result/result.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: QuizInstructionsComponent },
  { path: 'question/:id', component: QuestionsComponent },
  { path: 'result', component: ResultComponent }
  // { path: '**', component: NotFoundComponent }
  
];
  
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NotFoundComponent,
    QuizInstructionsComponent,
    ResultComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NavigationServiceService,QuestionBankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
