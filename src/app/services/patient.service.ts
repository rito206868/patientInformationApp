import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constant';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //url = 'http://localhost:4000';
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    //return this.http.get(`${this.url}/patients`);
    return this.http.get(`${API_URL}/user/get`);
  }

  getDataById(id: String): Observable<any> {
    return this.http.get(`${API_URL}/user/get/${id}`);
  }

  saveData(patient: Patient): Observable<any> {
    return this.http.post(`${API_URL}/user/create`, patient);
  }

  updateData(id: String, patient: Patient): Observable<any> {
    return this.http.put(`${API_URL}/user/update/${id}`, patient);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/user/delete/${id}`);
  }
}