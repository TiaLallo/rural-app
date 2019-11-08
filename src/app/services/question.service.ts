import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {QuestionChoiceHttpService} from './question-choice-http.service';
import {Question} from '../Person/question';
import get = Reflect.get;
import {QuestionHttpService} from './question-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private questionHttpService: QuestionHttpService) {
  }

    getQuestion(id): Observable<Question> {
      return this.questionHttpService.get(id);
    }

    getAllQuestions(): Observable<Question[]> {
      return this.questionHttpService.getAll();
    }
}
