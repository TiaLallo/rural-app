import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {UserCredentials} from '../user-credentials';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.url = environment.apiEndpointUrl + '/api/authentication';
  }

  signInUser(userCredentials: UserCredentials): Observable<any> {
    return this.http.post(this.url, userCredentials).pipe(map(result => {
      this.tokenService.setToken(result);
      return of(true);
    }));
  }

  signOutUser(): void {
    this.tokenService.clearToken();
  }

}
