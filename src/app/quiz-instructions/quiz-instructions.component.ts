import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
  }

  startQuiz(){
    console.log('Quiz started');
    this.router.navigate(['/question',1]);

  }

}
