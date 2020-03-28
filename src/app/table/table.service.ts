import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constant';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  //url = 'http://localhost:4000';
  baseURL = 'http://localhost:8080';
  getData() {
    //return this.http.get(`${this.url}/patients`);
	return this.http.get(`${this.baseURL}/user/get`);
  }
}