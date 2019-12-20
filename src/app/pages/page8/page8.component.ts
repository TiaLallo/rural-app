import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../../services/summary.service';
import {Summary} from '../../Person/summary';
import {SummariesService} from "../../services/summaries.service";
import {Person} from "../../Person/person";
import {PersonService} from "../../services/person.service";
import {PersonHttpService} from "../../services/person-http.service";

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component implements OnInit {

  private summaries: Summary[] = [];

  private person: Person;
  person2: Person[];

  constructor(private summaryService: SummaryService, private summariesService: SummariesService, private personService: PersonService, private personhttp: PersonHttpService)
  {
    this.person = new Person();

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
    this.addPersnID();
    console.log(this.person);
    this.personService.createPerson(this.person);
    console.log(this.summaries);
    this.summariesService.updatePerson(this.person);
    this.summariesService.clearSummaries();
    for(let i in this.summaries)
    {
      this.summariesService.updateSummaries(this.summaries[i]);
    }
  }

}
