import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {QuestionChoice} from '../Person/question-choice';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionChoiceHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/api/QuestionChoices';
  }

  getAll(): Observable<QuestionChoice[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as QuestionChoice[];
    }));
  }

  get(id): Observable<QuestionChoice> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as QuestionChoice;
    }));
  }
}
