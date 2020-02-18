import { Injectable } from '@angular/core';
import {Summary} from '../Person/summary';
import {Observable, of} from 'rxjs';
import {Person} from '../Person/person';

@Injectable({
  providedIn: 'root'
})
export class SummariesService {

  private summaries: Summary[] = [];
  private person: Person;
  private langSelected: number;  // 0 = FI 1 = EN
  constructor() {
    this.langSelected = 0;
  }

  clearSummaries()
  {
    this.summaries = [];
  }

  updateSummaries(data)
  {
    this.summaries.push(data);
  }

  routeData(): Observable<Summary[]>
  {
    return of(this.summaries);
  }

  updatePerson(dataPerson)
  {
    this.person = dataPerson;
  }

  getPerson(): Person
  {
    return this.person;
  }

  updateLang(selection)
  {
    this.langSelected = selection;
  }

  getLang()
  {
    return this.langSelected;
  }
}

