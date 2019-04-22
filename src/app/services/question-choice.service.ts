import { Injectable } from '@angular/core';
import {QuestionChoiceHttpService} from './question-choice-http.service';
import {QuestionChoice} from '../Person/question-choice';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionChoiceService {

  constructor(private questionChoiceHttpService: QuestionChoiceHttpService) {

  }

  getAllChoices(): Observable<QuestionChoice[]> {
    return this.questionChoiceHttpService.getAll();
  }
  getChoice(id): Observable<QuestionChoice> {
    return this.questionChoiceHttpService.get(id);
  }
}
