import { Injectable } from '@angular/core';
import {SummaryHttpService} from './summary-http.service';
import {Observable} from 'rxjs';
import {Summary} from '../Person/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private summaryHttpService: SummaryHttpService) {

    getSummary(): Observable<Summary> {
      return this.summaryHttpService.get();
    }

    getAllSummaries(): Observable<Summary> {
      return this.summaryHttpService.getAll();
    }

    createSummary(Summary): Observable<Summary> {
      return this.summaryHttpService.post(Summary);
    }

    updateSummary(Summary): Observable<Summary> {
      return this.summaryHttpService.put(Summary);
    }
  }
}
