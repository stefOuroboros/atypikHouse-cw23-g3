import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariablesGlobales } from '../variablesGlobales';
import { Type } from '../_models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private variables: VariablesGlobales) { }

  types(): Observable<Type[]> {
    return this.http.get<Type[]>(this.variables.config.apiUrl + "/type/allTypes");
  }
}
