import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService} from '../services/questionservice.service';
import { IMathQuestion, IAnswerResult } from '../interfaces/mathquest.interfaces';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { MatTable } from '@angular/material/table';
//import { MatTable} from '@angular/material';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public answers:IAnswerResult[] = [];
  dataSource = new MatTableDataSource<IAnswerResult>(this.answers);

  displayedColumns: string[] = ['Question', 'YourAnswer', 'CorrectAnswer', 'Result'];

  constructor(public qs: QuestionService) { 
    
  }
  //todo: Show table of results
  //todo: show aggregated results
  //todo: show reset?
  ngOnInit(): void {
    this.qs.answerListChanged$.subscribe(value => {
      console.log("Answer array updated");
      console.log(value);
      this.answers = value.reverse();
      this.dataSource.data = this.answers;
      
      //this.dataSource=new MatTableDataSource<IAnswerResult>(this.answers);
      

    });
  }

}
