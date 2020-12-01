import { Injectable } from '@angular/core';


@Injectable()
export class VariablesGlobales {
  constructor(
  ) { }
  config = {
    apiUrl : 'https://api-atypik.heroku.com',
    user : JSON.parse(localStorage.getItem('currentUser')),
  };
}
