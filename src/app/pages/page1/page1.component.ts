import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {QuestionChoiceService} from '../../services/question-choice.service';
import {Question} from '../../Person/question';
import {Router} from '@angular/router';
import {Summary} from '../../Person/summary';
import {QuestionChoice} from '../../Person/question-choice';
import {QuestionService} from '../../services/question.service';
import {SummariesService} from '../../services/summaries.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  title = 'angular-loader';
  public questionNumber: any;


  AllQuestions: Question[];
  QChoices: QuestionChoice[];

  currQuestion: Question;
  currQChoices: QuestionChoice[];
  filteredQChoices: QuestionChoice[];

  newSummary: Summary[] = [];
  savedSummaries: Summary[] = [];

  constructor(private summaryService: SummaryService, private questionService: QuestionService,
              private qChoiceService: QuestionChoiceService, private router: Router, private summaServ: SummariesService) {

    this.questionNumber = 1;

    this.qChoiceService.getAllChoices().subscribe(response => {
      this.QChoices = response;
      this.sortQuestionChoices(this.questionNumber);
    });

    this.questionService.getAllQuestions().subscribe(res => {
      this.AllQuestions = res;
      this.currQuestion = this.AllQuestions[this.questionNumber - 1];
    });

    // newList summaries ja sit ku kaikki täytetty ja painaa nappi eteenpäin -> tallennus
    this.newSummary[0] = new Summary();
    this.newSummary[1] = new Summary();
    this.newSummary[2] = new Summary();
    this.newSummary[3] = new Summary();
  }
    //jos aikaisemmin tallennettua dataa hakee sen että vahinko painallus takaisin ei resetoi tekemistä
    this.summaServ.routeData().subscribe(res =>{
      this.savedSummaries = res;
    });

    if (this.savedSummaries[0] === undefined) {

      for(let i = 0; i < 4; i++) {
        this.newSummary[i] = new Summary();
      }
    }
    else {
      for(let i = 0; i < 4; i++) {
        this.newSummary[i] = this.savedSummaries[i];
      }
    }
  }

  ngOnInit() {

  }

  saveAnswer() {

    // tarkistaa onko uutta dataa vai vanhaa ja toiminta sen mukaan

    if(this.savedSummaries[(this.questionNumber - 1) * 4] === undefined)
    for (let i in this.newSummary) {
      this.newSummary[i].QuestionChoiseId = this.currQChoices[i].questionChoiseId;
      this.savedSummaries.push(this.newSummary[i]);
    }
    else {
      for (let i in this.newSummary) {
      this.newSummary[i].QuestionChoiseId = this.currQChoices[i].questionChoiseId;
    }
        let x = (this.questionNumber - 1) * 4;
        this.savedSummaries.splice(x,4, this.newSummary[0], this.newSummary[1], this.newSummary[2], this.newSummary[3]);
    }
  }

  sortQuestionChoices(questionNumber1) {
    if (questionNumber1 !== undefined) {
      //Add Alert?
    }
    else {
      questionNumber1 = 1;
    }
    this.filteredQChoices = this.QChoices.filter(function (objects) {
      return objects.questionId === questionNumber1;
    });
    this.currQChoices = this.filteredQChoices;
  }

  nextQuestions() {
    if (this.questionNumber == 2)  // real value 7, 2 for testing
    {
      this.saveAnswer();
      this.summaServ.clearSummaries();
      for (let i in this.savedSummaries)
      {
        this.summaServ.updateSummaries(this.savedSummaries[i]);
      }
      this.router.navigate(['/page8']);
    }
    else {

      this.saveAnswer();

      this.questionNumber = this.questionNumber + 1;
      this.sortQuestionChoices(this.questionNumber);
      this.currQuestion = this.AllQuestions[this.questionNumber - 1];


      //Tarkistaa onko aikasemmin jo käyty seuraavissa kysymyksissä ja jos on niin lataa tallennetut vastaukset
      if (this.savedSummaries[(this.questionNumber - 1) * 4] !== undefined) {
        let x = (this.questionNumber - 1) * 4;

        for(let i = 0; i < 4; i++) {
          this.newSummary[i] = this.savedSummaries[x + i];
        }
      }
      else
      {
        for(let i = 0; i < 4; i++) {
          this.newSummary[i] = new Summary();
        }
      }
    }
  }

  prevQuestions() {
    if (this.questionNumber == 1) {
      this.questionNumber = 1;
      this.router.navigate(['/page']);
    }
    else {
      this.saveAnswer();

      this.questionNumber = this.questionNumber - 1;
      this.sortQuestionChoices(this.questionNumber);
      this.currQuestion = this.AllQuestions[this.questionNumber - 1];

      let x = (this.questionNumber - 1) * 4;

      for(let i = 0; i < 4; i++) {
        this.newSummary[i] = this.savedSummaries[x + i];
      }
    }
  }
}



