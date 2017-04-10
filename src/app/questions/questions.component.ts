import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule, Routes } from '@angular/router';
import { NavigationServiceService} from '../navigation-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questionNumber: Number
  sub:any
  constructor(private route: ActivatedRoute, private navService: NavigationServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.questionNumber = +params['id']; 
    this.navService.setCurrentQuestion(this.questionNumber);
    console.log('Going to show question number:'+ this.questionNumber);
});

  }

}
