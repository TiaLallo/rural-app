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
    this.url = environment.apiEndpointUrl + 'api/person';
  }

  getAll(): Observable<Person[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Person[];
    }));
  }

  get(id): Observable<Person> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Person;
    }));
  }

  put(id, person): Observable<Person> {
    return this.httpClient.put(this.url + '/' + person.id, person).pipe(map(response => {
      return response as Person;
    }));
  }

  post(person): Observable<Person> {
    return this.httpClient.post(this.url, person).pipe(map(response => {
      return response as Person;
    }));
  }
}

