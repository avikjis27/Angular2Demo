import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from '../navigation-service.service';
import { QuestionBankService } from '../question-bank.service';
import { Questions } from '../questions/questions.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  questions:Array<Questions>
  constructor(private navService: NavigationServiceService, private questService: QuestionBankService) {
    
   }

  ngOnInit() {
    this.questions = this.questService.getAllQuestions();
  }

}
