import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {SummaryHttpService} from '../../services/summary-http.service';
import {Router} from '@angular/router';
import {Summary} from '../../Person/summary';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  newSummary: Summary;
  testSummary: Summary;

  constructor(private summaryService: SummaryService) {
    this.newSummary = new Summary();
    this.testSummary = new Summary();
    this.testSummary.PersonId = 1;
    this.testSummary.QuestionChoiceId = 2;
    this.testSummary.LeftValue = 4;
    this.testSummary.RightValue = 8;
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
