import { Injectable } from '@angular/core';
import {Person} from '../Person/person';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + 'api/people';
  }

  getAll(): Observable<Person[]> {
    return this.httpClient.get(this.url, {headers}).pipe(map(response => {
      return response as Person[];
    }));
  }

  get(id): Observable<Person> {
    return this.httpClient.get(this.url + '/' + id, {headers}).pipe(map(response => {
      return response as Person;
    }));
  }
}

