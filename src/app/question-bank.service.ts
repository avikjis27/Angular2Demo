import { Injectable } from '@angular/core';
import { Questions } from './questions/questions.model';

@Injectable()
export class QuestionBankService {

  private questions: Array<Questions>

  constructor() {
    this.questions = new Array<Questions>();
    for (let index = 1; index <= 10; index++) {
      let question = new Questions();
      question.marks = 1;
      question.questionDescription = "This is the question holder for " + index;
      question.options = new Array<String>();
      question.options.push("First Option for question " + index);
      question.options.push("Second Option for question " + index);
      question.options.push("Third Option for question " + index);
      question.options.push("Forth Option for question " + index);
      question.correctOption = 3;
      question.correctAnswerDescription = question.options[question.correctOption-1];

      this.questions.push(question);

    }

  }

  getQuestion(qNo: any):Questions {

    let question: Questions;

    this.questions.forEach((item, index) => {
      if ((qNo-1) === index) {
        question = item;
      }
    });

    return question;
  }

  updateAnswer(qNo:any, ans:number){
    this.questions.forEach((item, index) => {
      if ((qNo-1) === index) {
        item.selectedAnswer = ans ;
        item.selectedAnswerDescription = item.options[ans-1];
      }
    });
  }

  getSelectedAnswer(qNo:any):Number{
    let selectedAnswer: Number;
    this.questions.forEach((item, index) => {
      if ((qNo-1) === index) {
        selectedAnswer = item.selectedAnswer;
      }
    });
    return selectedAnswer;
  }

  getAllQuestions():Array<Questions>{
    return this.questions;
  }

}
