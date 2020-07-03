import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  readonly rootURL = 'http://localhost:59485/api';
  list: Paciente[] = [];

  constructor(private http: HttpClient) { }

  postPaciente(formDataCrud: Paciente) {    
    return this.http.post(this.rootURL + '/Paciente', formDataCrud);  
  }
  putPaciente(formDataCrud: Paciente) {
    return this.http.put(this.rootURL + '/Paciente/'+ formDataCrud.Id, formDataCrud);
  }
  deletePaciente(id) {
    return this.http.delete(this.rootURL + '/Paciente/'+ id);
  }
  getPacientes() {
    return this.http.get(this.rootURL + '/Paciente')
  }
  refreshList() {
    this.http.get(this.rootURL + '/Paciente')
    .toPromise()
    .then(res => this.list = res as Paciente[]);
  }
}
