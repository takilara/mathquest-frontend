import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMathQuestion, IAnswerResult } from '../interfaces/mathquest.interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionId:string = "";
  answers:IAnswerResult[] = [];
  correctAnswers:number = 0;
  incorrectAnswers:number = 0;

  answerListChanged$ = new  BehaviorSubject(this.answers);

  constructor(private http: HttpClient) { }

  getMathQuestion() {
    return this.http.get<IMathQuestion>("http://127.0.0.1:8000/question/math/multiplication");
  }

  getCheckAnswer(answer:string) {
    var url = `http://127.0.0.1:8000/answer/${this.questionId}?answer=${answer}`;
    console.log("GET to:");
    console.log(url);
    return this.http.get<IAnswerResult>(url);
  }

  checkAnswer(answer:string) {
    this.getCheckAnswer(answer).subscribe(
      value=> {
        console.log("Answer returned:");
        console.log(value);
        //this.answers.push(value.Result)
        this.answers.push(value);
        this.answerListChanged$.next(this.answers);
        if(value.Result) {this.correctAnswers+=1;} else {this.incorrectAnswers+=1;}
      }
    );
  }

  
}
