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

  AllQuestions: Question[];
  QChoices: QuestionChoice[];

  currQuestion: Question;
  currQChoices: QuestionChoice[];
  filteredQChoices: QuestionChoice[];

  newSummary: Summary;
  testSummary: Summary;

  constructor(private summaryService: SummaryService, private questionService: QuestionService,
              private qChoiceService: QuestionChoiceService) {

    this.qChoiceService.getAllChoices().subscribe(response => {
      this.QChoices = response;
      this.sortQuestionChoices();
    });

    this.questionService.getAllQuestions().subscribe(res =>{
      this.AllQuestions = res;
      this.currQuestion = this.AllQuestions[0];
    });

    // newList summaries ja sit ku kaikki täytetty ja painaa nappi eteenpäin -> tallennus
    this.newSummary = new Summary();
    this.testSummary = new Summary();
    this.testSummary.PersonId = 2;
    this.testSummary.QuestionChoiseId = 5;
    this.testSummary.LeftValue = 5;
    this.testSummary.RightValue = 7;
  }

  ngOnInit() {

  }

  sendAnswer() {
    this.summaryService.createSummary(this.testSummary).subscribe(result => {
      this.testSummary = result;
    });
  }

  sortQuestionChoices() {
    this.filteredQChoices = this.QChoices.filter(function (objects) {
      return objects.questionId === 1;
    });
    console.log(this.filteredQChoices);
    this.currQChoices = this.filteredQChoices;
    console.log(this.currQChoices);
  }

}
