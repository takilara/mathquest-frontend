import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionService } from '../services/questionservice.service';

@Component({
  selector: 'app-answerform',
  templateUrl: './answerform.component.html',
  styleUrls: ['./answerform.component.scss']
})
export class AnswerformComponent implements OnInit {
  answer:string = "";
  constructor(private qs:QuestionService) { }

  ngOnInit(): void {
    this.qs.answerListChanged$.subscribe(value => {
      // we received an answer, perform any cleanup
      this.answer="";
      //TODO: default to edit field
    });
  }

  public submitAnswer() {
    console.log("Submit the answer:");
    console.log(this.answer);
    console.log("To: ",this.qs.questionId);
    this.qs.checkAnswer(this.answer);
  }

}
