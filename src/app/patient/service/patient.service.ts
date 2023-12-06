import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';

const Url = 'http://localhost:8080/hms-test/';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient){}

  public getUser(id: string): Observable<Patient> {
    return this.http.get<Patient>(Url + 'patients/' + id);
  }

  public addUser(book: Patient): Observable<Patient> {
    return this.http.post<Patient>(Url + 'addpatient', book);
  }
}
