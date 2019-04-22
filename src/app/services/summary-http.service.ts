import { Injectable } from '@angular/core';
import {Summary} from '../Person/summary';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/api/summary';
  }

  get(id): Observable<Summary> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Summary;
    }));
  }

  getAll(): Observable<Summary[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Summary[];
    }));
  }

  post(summary): Observable<Summary> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Summary;
    }));
  }

  put(id, summary): Observable<Summary> {
    return this.httpClient.put(this.url + '/' + summary.id, summary).pipe(map(response => {
      return response as Summary;
    }));
  }
}
