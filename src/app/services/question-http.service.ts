import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../Person/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/api/question';
  }

  get(): Observable<Question> {
  }

  getAll():
}
