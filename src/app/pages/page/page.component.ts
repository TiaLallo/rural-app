import { Component, OnInit } from '@angular/core';
import {SummariesService} from "../../services/summaries.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {


  private selectedLang: number;

  constructor(private summaServ: SummariesService) {

    this.selectedLang = this.summaServ.getLang();
  }

  ngOnInit() {
  }

}
