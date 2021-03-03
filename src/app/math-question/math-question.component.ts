import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../services/questionservice.service';
import { IMathQuestion } from '../interfaces/mathquest.interfaces';

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})
export class MathQuestionComponent implements OnInit {
  public question:string ="";

  constructor(public qs : QuestionService) { }

  ngOnInit(): void {
    this.getQuestion();
    this.qs.answerListChanged$.subscribe(value => {
      console.log("Answer array updated");
      console.log(value);
      this.getQuestion();
    });
  }

  getQuestion() {
    this.qs.getMathQuestion().subscribe((data:IMathQuestion) => 
    {
      var q = data.Question;
      console.log(data);
      console.log(q);
      this.question=q;
      this.qs.questionId=data.Id;
    });
  }



}
