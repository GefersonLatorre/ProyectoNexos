import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  readonly rootURL = 'http://localhost:59485/api';
  list: Doctor[];

  constructor(private http: HttpClient) { }

  postDoctor(formDataCrud: Doctor) {    
    return this.http.post(this.rootURL + '/Doctor', formDataCrud);
  }
  putDoctor(formDataCrud: Doctor) {
    return this.http.put(this.rootURL + '/Doctor/'+ formDataCrud.Id, formDataCrud);
  }
  getDoctores() {
    return this.http.get(this.rootURL + '/Doctor')
  }
  refreshList(){
    this.http.get(this.rootURL + '/Doctor')
    .toPromise()
    .then(res => this.list = res as Doctor[]);
  }
}
