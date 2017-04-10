import { Injectable } from '@angular/core';

@Injectable()
export class NavigationServiceService {

  private currentQuestionNumber
  private skippedQuestions: Array<Number>

  getPreviousQuestion(){
    let prevQues = this.currentQuestionNumber-1;
    return prevQues;
  }

  getNextQuestion(){
    let nextQues = this.currentQuestionNumber+1;
    return nextQues;
  } 

  setCurrentQuestion(ques:Number){
    console.log('called setCurrentQuestion with :'+ques );
    this.currentQuestionNumber = ques;
  }

  setSkippedQuestion(number: Number){
    this.skippedQuestions.push(number);
  }

  getSkippedQuestion(){
    return this.getSkippedQuestion;
  }

  constructor() { }

}
