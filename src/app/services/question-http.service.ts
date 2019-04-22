import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../Person/question';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/api/questions';
  }

  getAll(): Observable<Question[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Question[];
    }));
  }

  get(id): Observable<Question> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Question;
    }));
  }
}
