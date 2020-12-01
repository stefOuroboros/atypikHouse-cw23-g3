import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hebergement } from 'src/app/_models/hebergement';
import { Observable } from 'rxjs';
import { VariablesGlobales } from '../variablesGlobales';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public urlHome = "http://localhost:8080"

  constructor(private http: HttpClient, private variables: VariablesGlobales) { }


  home(): Observable<Hebergement[]> {
    return this.http.get<Hebergement[]>(this.variables.config.apiUrl + "/home/allHomes");
  }

  findHome(id: string): Observable<Hebergement> {
    return this.http.get<Hebergement>(this.variables.config.apiUrl + "/home/" + id);
  }

}
