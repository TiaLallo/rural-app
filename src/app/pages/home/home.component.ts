import { Component, OnInit } from '@angular/core';
import {SummariesService} from '../../services/summaries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sumServ: SummariesService)
  {

  }

  ngOnInit() {
  }

  langFI() {
    this.sumServ.updateLang(0);
  }

  langEN() {
    this.sumServ.updateLang(1);
  }
}


