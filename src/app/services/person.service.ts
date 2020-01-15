import { Injectable } from '@angular/core';
import {Person} from '../Person/person';
import {PersonHttpService} from './person-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpService: PersonHttpService) {
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
