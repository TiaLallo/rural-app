import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {QuestionChoiceService} from '../../services/question-choice.service';
import {Question} from '../../Person/question';
import {Router} from '@angular/router';
import {Summary} from '../../Person/summary';
import {QuestionChoice} from '../../Person/question-choice';
import {QuestionService} from '../../services/question.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public questionNumber: any;

  AllQuestions: Question[];
  QChoices: QuestionChoice[];

  currQuestion: Question;
  currQChoices: QuestionChoice[];
  filteredQChoices: QuestionChoice[];

  newSummary: Summary[] = [];
  testSummary: Summary;

  constructor(private summaryService: SummaryService, private questionService: QuestionService, private qChoiceService: QuestionChoiceService, private router: Router) {

    this.questionNumber = 1;

    this.qChoiceService.getAllChoices().subscribe(response => {
      this.QChoices = response;
      this.sortQuestionChoices(this.questionNumber);
    });

    this.questionService.getAllQuestions().subscribe(res =>{
      this.AllQuestions = res;
      this.currQuestion = this.AllQuestions[this.questionNumber - 1];
    });

    //newList summaries ja sit ku kaikki täytetty ja painaa nappi eteenpäin -> tallennus
    this.newSummary[0] = new Summary();
    this.newSummary[1] = new Summary();
    this.newSummary[2] = new Summary();
    this.newSummary[3] = new Summary();
  }

  ngOnInit() {

  }

  sendAnswer()
  {
    this.summaryService.createSummary(this.newSummary).subscribe(result => {
      this.testSummary = result;
    });
  }

  saveAnswer()
  {
    for(let i in this.newSummary)
    {
      console.log(this.newSummary[i]);
    }
  }

  sortQuestionChoices(questionNumber1)
  {
    if(questionNumber1 !== undefined) {
      console.log("JEE");
    }
    else{
      questionNumber1 = 1;
      console.log("VOI EI");
    }
    this.filteredQChoices = this.QChoices.filter(function(objects){
      return objects.questionId === questionNumber1;
    });
    console.log(this.filteredQChoices);
    this.currQChoices = this.filteredQChoices;
    console.log(this.currQChoices);
  }

  nextQuestions()
  {if(this.questionNumber == 7)
  {
    //this.saveAnswer();
    this.router.navigate(['/page8']);
  }
  else {
    this.questionNumber = this.questionNumber + 1;
    this.sortQuestionChoices(this.questionNumber);
    this.currQuestion = this.AllQuestions[this.questionNumber - 1];
  }
  }

  prevQuestions()
  {
    if(this.questionNumber == 1)
    {
      this.questionNumber = 1;
      this.router.navigate(['/page']);
    }
    else
      {
      this.questionNumber = this.questionNumber - 1;
      this.sortQuestionChoices(this.questionNumber);
      this.currQuestion = this.AllQuestions[this.questionNumber - 1];

        this.newSummary[0] = new Summary();
        this.newSummary[1] = new Summary();
        this.newSummary[2] = new Summary();
        this.newSummary[3] = new Summary();

        for(let i in this.newSummary){
          console.log(this.newSummary[i]);
        }
      }
  }

}
