import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {Summary} from '../../Person/summary';
import {SummariesService} from "../../services/summaries.service";
import {Person} from "../../Person/person";
import {PersonService} from "../../services/person.service";
import {validateBasis} from "@angular/flex-layout";

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component implements OnInit {

  private summaries: Summary[] = [];

  private person: Person;

  constructor(private summaryService: SummaryService, private summariesService: SummariesService, private personService: PersonService)
  {
    this.person = new Person();

    this.personService.getAllPerson().subscribe( response => {
      this.person.PersonId = response.length;
      this.addPersnID();
      }
    )

    this.summariesService.routeData().subscribe(res =>
    {
      this.summaries = res;
    })
  }

  ngOnInit() {
  }

  changeNat(input)
  {
    this.person.Nationality = input;
    console.log(this.person);
  }

  changeSex(input)
  {
    this.person.Sex = input;
    console.log(this.person);
  }

  addPersnID()
  {
    for(let i in this.summaries)
    {
      this.summaries[i].PersonId = this.person.PersonId;
    }
  }

  finalData()
  {
    console.log(this.person);
    console.log(this.summaries);
    this.summariesService.updatePerson(this.person);
    this.summariesService.updateSummaries(this.summaries);
  }

}
