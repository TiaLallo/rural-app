import { Component, OnInit } from '@angular/core';
import {SummariesService} from "../../services/summaries.service";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  public selectedLang: number;

  constructor(private summaServ: SummariesService) {

    this.selectedLang = this.summaServ.getLang();
  }

  ngOnInit() {
  }

}
