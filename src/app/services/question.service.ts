import { Injectable } from '@angular/core';
import {Question} from '../Person/question';
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
