import { Injectable } from '@angular/core';
import {Person} from '../Person/person';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpService: HttpService) {
  }

  getPerson(): Observable<Person> {
    return this.httpService.get();
  }

  getPersonId(): Observable<Person[]> {
    return this.httpService.getAll();
  }
}
