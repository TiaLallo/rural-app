import { Injectable } from '@angular/core';
import {SummaryHttpService} from './summary-http.service';
import {Observable} from 'rxjs';
import {Summary} from '../Person/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private summaryHttpService: SummaryHttpService) {

  }
    getSummary(id): Observable<Summary> {
      return this.summaryHttpService.get(id);
    }

    getAllSummaries(): Observable<Summary[]> {
      return this.summaryHttpService.getAll();
    }

    createSummary(summary): Observable<Summary> {
      console.log(summary);
      return this.summaryHttpService.post(summary);
    }

    updateSummary(id, summary): Observable<Summary> {
      return this.summaryHttpService.put(id, summary);
    }
}
