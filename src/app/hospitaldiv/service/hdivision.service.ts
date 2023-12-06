import { Injectable } from '@angular/core';
import { Hdivision } from '../model/hdivision';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'http://localhost:8080/hms-test/';
@Injectable({
  providedIn: 'root'
})
export class HdivisionService {

  constructor(private http: HttpClient){}

  public getUser(id: string): Observable<Hdivision> {
    return this.http.get<Hdivision>(Url + 'divisions/' + id);
  }

  public addUser(book: Hdivision): Observable<Hdivision> {
    return this.http.post<Hdivision>(Url + 'adddivision', book);
  }
}
