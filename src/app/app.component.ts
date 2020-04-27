import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/internal/operators/filter';

declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rural-app';
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-162432480-1', {
        page_path: event.urlAfterRedirects
      });
    });
  }


}
