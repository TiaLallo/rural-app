import { Injectable } from '@angular/core';
import {Summary} from "../Person/summary";
import {Observable, of} from "rxjs";
import {Person} from "../Person/person";

@Injectable({
  providedIn: 'root'
})
export class SummariesService {

  private summaries: Summary[] = [];
  private person: Person;
  constructor()
  {

  }

  clearSummaries()
  {
    this.summaries = [];
  }

  updateSummaries(data)
  {
    this.summaries.push(data);
    console.log(this.summaries);
  }

  routeData(): Observable<Summary[]>
  {
    return of(this.summaries);
  }

  updatePerson(dataPerson)
  {
    this.person = dataPerson;
    console.log(this.person);
  }

  getPerson(): Person
  {
    return this.person;
  }
}

