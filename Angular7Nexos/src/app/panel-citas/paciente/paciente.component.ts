import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: [
  ]
})
export class PacienteComponent implements OnInit {
  datosP: Paciente = new Paciente();

  constructor(private serviceCrudP: PacienteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  uploadDatosP(data: Paciente) {
    this.datosP = data;
  }

  resetForm() {
    this.datosP = new Paciente();
  }

  onSubmit() {
    if (this.datosP.Id == 0 || this.datosP.Id == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudP.postPaciente(this.datosP).subscribe(
      res => {
        this.toastr.success('Enviado correctamente', 'Paciente Registrado');
        this.resetForm();
        this.serviceCrudP.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudP.putPaciente(this.datosP).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Enviado correctamente', 'Paciente Modificado');
        this.serviceCrudP.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
