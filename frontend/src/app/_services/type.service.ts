import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../_models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  types(): Observable<Type[]> {
    return this.http.get<Type[]>("http://localhost:8080/type/allTypes");
  }
}
