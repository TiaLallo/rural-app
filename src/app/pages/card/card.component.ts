import { Component, OnInit } from '@angular/core';
import {Summary} from "../../Person/summary";
import {SummaryService} from "../../services/summary.service";
import {SummariesService} from "../../services/summaries.service";
import {Person} from "../../Person/person";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public selectedLang: number;
  private summary: Summary;
  private summaries: Summary[] = [];
  public person: Person;
  private person2: Person;
  private persons: Person[];

  constructor(private summaryService: SummaryService, private sumServices: SummariesService, private personService: PersonService)
  {
    this.sumServices.routeData().subscribe( res =>
    {
      this.summaries = res;
    });

    this.selectedLang = this.sumServices.getLang();
  }

  ngOnInit() {
  }

  sendAnswer()
  {
    this.person = this.sumServices.getPerson();
    this.personService.createPerson(this.person).subscribe( res => {
      this.person = res;
      this.getPersonId();
    });
  }

  getPersonId()
  {
    this.personService.getAllPerson().subscribe(data =>
    {
      this.persons = data;
      let pID = this.persons.length - 1;
      this.person2 = this.persons[pID];
      this.addPersnID();
    });
  }

  addPersnID()
  {
    for(let i in this.summaries)
    {
      this.summaries[i].PersonId = this.person2.personId;
    }
    this.finalSend();
  }

  finalSend()
  {
    for(let i in this.summaries)
      this.summaryService.createSummary(this.summaries[i]).subscribe(result => {
        this.summary = result;
      });
  }

}
