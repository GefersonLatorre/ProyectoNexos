import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  readonly rootURL = 'http://localhost:59485/api';
  list: Cita[];

  constructor(private http: HttpClient) { }
  
  postCita(formDataCrud: Cita) {    
    return this.http.post(this.rootURL + '/Cita', formDataCrud);  
  }
  deleteCita(id) {
    return this.http.delete(this.rootURL + '/Cita/'+ id);
  }
  refreshList(idDoctor: any, idPaciente: any){
    this.http.get(this.rootURL + '/Cita/' + idDoctor + '/' + idPaciente)
    .toPromise()
    .then(res => this.list = res as Cita[]);
  }
}
