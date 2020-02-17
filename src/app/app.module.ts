import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { Page1Component } from './pages/page1/page1.component';
import {RouterModule, Routes} from '@angular/router';
import {MatSliderModule} from '@angular/material';
import {HomeComponent} from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Page2Component } from './pages/page2/page2.component';
import {MatSelectModule} from '@angular/material';
import { PageComponent } from './pages/page/page.component';
import {MatInputModule} from '@angular/material';
import {MatTableModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';
import { Page7Component } from './pages/page7/page7.component';
import { FinalComponent } from './pages/final/final.component';
import { CardComponent } from './pages/card/card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SummaryHttpService} from './services/summary-http.service';
import {PersonHttpService} from './services/person-http.service';
import {QuestionChoiceHttpService} from './services/question-choice-http.service';
import {QuestionHttpService} from './services/question-http.service';
import {PersonService} from './services/person.service';
import {QuestionService} from './services/question.service';
import {QuestionChoiceService} from './services/question-choice.service';
import {SummaryService} from './services/summary.service';
import {FormsModule} from '@angular/forms';
import { Page8Component } from './pages/page8/page8.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './user/login/login.component';
import { AdminViewComponent } from './user/login/admin-view/admin-view.component';
import {AuthService} from './user/services/auth.service';
import {AuthGuard} from './user/guard/auth.guard';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { LoaderComponent } from './/loader/loader.component';
import {LoaderService} from './loader/loader.service';
import {LoaderInterceptor} from './loader/loader-interceptor';
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Matkailukysely'}},
  {path: 'page', component: PageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/main29283474367', component: AdminViewComponent, canActivate: [AuthGuard], data: {target: ['main']}},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'page4', component: Page4Component},
  {path: 'page5', component: Page5Component},
  {path: 'page6', component: Page6Component},
  {path: 'page7', component: Page7Component},
  {path: 'page8', component: Page8Component},
  {path: 'alert', component: CardComponent},
  {path: 'final', component: FinalComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HomeComponent,
    Page2Component,
    PageComponent,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    FinalComponent,
    CardComponent,
    Page8Component,
    MainNavComponent,
    LoginComponent,
    AdminViewComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule,
    MatSelectModule,
    FlexLayoutModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule
  ],
  providers: [
    PersonHttpService,
    PersonService,
    QuestionService,
    QuestionHttpService,
    QuestionChoiceService,
    SummaryService,
    QuestionChoiceHttpService,
    SummaryHttpService,
    AuthService,
    AuthGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
