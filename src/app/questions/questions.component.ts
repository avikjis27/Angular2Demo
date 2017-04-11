import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { NavigationServiceService } from '../navigation-service.service';
import { QuestionBankService } from '../question-bank.service';
import { Questions } from './questions.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  selectedAns: Number
  isPrevAllowed: Boolean
  isNextAllowed: Boolean
  questionNumber: Number
  canSubmit: Boolean
  sub: any
  question: Questions
  constructor(private route: ActivatedRoute, private navService: NavigationServiceService, private questService: QuestionBankService, private router: Router) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.questionNumber = +params['id'];
      this.navService.setCurrentQuestion(this.questionNumber);
      this.question = this.questService.getQuestion(this.questionNumber);
      if (this.questionNumber === 1)
      { this.isPrevAllowed = false; }
      else {
        this.isPrevAllowed = true;
      }

      if (this.questionNumber === 10) {
        this.isNextAllowed = false;
        this.canSubmit = true;
      } else {
        this.isNextAllowed = true;
        this.canSubmit = false;
      }
      this.selectedAns = this.questService.getSelectedAnswer(this.questionNumber);
      console.log('Going to show question number:' + this.questionNumber);
    });

  }

  goPrev() {

    this.router.navigate(['/question', this.navService.getPreviousQuestion()]);
  }

  goNext() {

    this.router.navigate(['/question', this.navService.getNextQuestion()]);
  }

  doFlag() {
    alert('Flagged');
  }

  selectedAnswer(ans:number){
    this.questService.updateAnswer(this.questionNumber,ans);
  }
  
  submit(){
    this.router.navigate(['/result']);
  }



}
