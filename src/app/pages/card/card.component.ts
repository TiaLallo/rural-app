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

  private summary: Summary;
  private summaries: Summary[] = [];
  private person: Person;

  constructor(private summaryService: SummaryService, private sumServices: SummariesService, private personService: PersonService)
  {
    this.sumServices.routeData().subscribe( res =>
    {
      this.summaries = res;
      console.log(this.summaries);
    });
  }

  ngOnInit() {
  }

  sendAnswer()
  {
    this.person = this.sumServices.getPerson();
    this.personService.createPerson(this.person);

    /*for(let i in this.summaries)
      this.summaryService.createSummary(this.summaries[i]).subscribe(result => {
        this.summary = result;
      }); */
    console.log("nyt lähti");
    console.log(this.person);
    console.log(this.summaries);
  }

}
