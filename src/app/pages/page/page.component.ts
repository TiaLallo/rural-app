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

  constructor() {
  }

  ngOnInit() {
  }

}
