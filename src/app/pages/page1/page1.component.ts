import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {QuestionChoiceService} from '../../services/question-choice.service';
import {Question} from '../../Person/question';
import {SummaryHttpService} from '../../services/summary-http.service';
import {Router} from '@angular/router';
import {Summary} from '../../Person/summary';
import {QuestionChoice} from '../../Person/question-choice';
import {QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  testQuestion: Question;
  testQChoice: QuestionChoice;

  newSummary: Summary;
  testSummary: Summary;

  constructor(private summaryService: SummaryService, private questionService: QuestionService, private qChoiceService: QuestionChoiceService) {

    this.qChoiceService.getChoice(1).subscribe(response => {
      this.testQChoice = response;
    });

    this.questionService.getQuestion(1).subscribe(res =>{
      this.testQuestion = res;
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
