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

  getPerson(id): Observable<Person> {
    return this.httpService.get(id);
  }

  getAllPerson(): Observable<Person[]> {
    return this.httpService.getAll();
  }

  updatePerson(id, person): Observable<Person> {
    return this.httpService.put(id, person);
  }
  createPerson(person): Observable<Person> {
    return this.httpService.post(person);
  }
}
