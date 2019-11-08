import { Component, OnInit } from '@angular/core';
import {Question} from '../../Person/question';
import {QuestionService} from '../../services/question.service';
import {QuestionChoiceService} from '../../services/question-choice.service';
import {QuestionChoice} from '../../Person/question-choice';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {

  qList: Question[];
  qChoiceList: QuestionChoice[];

  constructor(private qService: QuestionService, private qChoiceService: QuestionChoiceService) {
    this.qService.getAllQuestions().subscribe(res=> {
      this.qList = res;
    })

    this.qChoiceService.getAllChoices().subscribe(res=> {
      this.qChoiceList = res;

      console.log(this.qList);
      console.log(this.qChoiceList);
    })
  }

  ngOnInit() {
  }

}
