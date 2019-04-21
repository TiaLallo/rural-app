import { Injectable } from '@angular/core';
import {QuestionChoiceHttpService} from './question-choice-http.service';
import {QuestionChoice} from '../Person/question-choice';

@Injectable({
  providedIn: 'root'
})
export class QuestionChoiceService {

  constructor(private questionChoiceHttpService: QuestionChoiceHttpService) {

  }
}
