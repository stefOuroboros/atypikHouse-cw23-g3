import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VariablesGlobales } from '../variablesGlobales';
import { pipe } from 'rxjs';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private variablesGlobales : VariablesGlobales,
  ) {


    if(localStorage.getItem('currentUser')){
      console.log(localStorage.getItem('currentUser'))
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
    else{
      this.currentUserSubject = new BehaviorSubject<any>(false);
    }

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  public currentUserObs(): Observable<any>{
    return this.currentUserSubject.asObservable();
  }

  login(email, password) {
    return this.http.get<any>(`${this.variablesGlobales.config.apiUrl}/user/email=`+email)
    .pipe(map(user => {
      if(user != null  && user.password === password){
        console.log(JSON.stringify(user));

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
