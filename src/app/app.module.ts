import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: QuizInstructionsComponent },
  { path: 'question/:id', component: QuestionsComponent },
  { path: '**', component: NotFoundComponent }
  
];
  
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NotFoundComponent,
    QuizInstructionsComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
