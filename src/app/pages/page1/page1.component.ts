import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {QuestionChoiceService} from '../../services/question-choice.service';
import {SummaryHttpService} from '../../services/summary-http.service';
import {Router} from '@angular/router';
import {Summary} from '../../Person/summary';
import {QuestionChoice} from '../../Person/question-choice';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  testQuestion: QuestionChoice;
  testText: string;

  newSummary: Summary;
  testSummary: Summary;

  constructor(private summaryService: SummaryService, private questionService: QuestionChoiceService) {

    this.questionService.getChoice(1).subscribe(response => {
      this.testQuestion = response;
      this.testText = this.testQuestion.leftTitle;
    });

    //newList summaries ja sit ku kaikki täytetty ja painaa nappi eteenpäin -> tallennus
    this.newSummary = new Summary();
    this.testSummary = new Summary();
    this.testSummary.PersonId = 2;
    this.testSummary.QuestionChoiseId = 5;
    this.testSummary.LeftValue = 5;
    this.testSummary.RightValue = 7;
  }

  ngOnInit() {

  }

  sendAnswer()
  {

    // console.log(this.newSummary);
    // get personID and questionchoiceIDs
    // console.log(this.testSummary);
    this.summaryService.createSummary(this.testSummary).subscribe(result => {
      this.testSummary = result;
    });
  }

}
