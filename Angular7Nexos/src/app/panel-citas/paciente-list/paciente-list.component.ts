import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita.model';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styles: [
  ]
})
export class PacienteListComponent implements OnInit {

  @Input("vp") idDoctor: number;
  @Output() public dataP: EventEmitter<Paciente> = new EventEmitter();
  @Output() public viewPanelDoctores: EventEmitter<Paciente> = new EventEmitter();
  @Output() public viewPanelsP: EventEmitter<boolean> = new EventEmitter();
  @Output() public updateDataD: EventEmitter<boolean> = new EventEmitter();
  botonA: boolean = false;
  botonB: boolean = false;
  datosC: Cita = new Cita();
  pacientesCodigos: any = {};
  loadingPacientes: boolean = false;

  constructor(public serviceCrudP: PacienteService, public serviceCrudC: CitaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.serviceCrudP.refreshList();
    if (this.idDoctor != null) {
      this.botonA = true;
      this.botonB = false;
    } else {
      this.botonA = false;
      this.botonB = true;
    }
  }

  onDelete(Id) {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.serviceCrudP.deletePaciente(Id)
        .subscribe(res => {
          this.refreshList();
          this.toastr.warning('Eliminado Correctamente', 'Paciente Eliminado');
        },
          err => {
            this.toastr.error('El paciente tiene al menos un doctor asociado', 'Error');
          })
    }
  }

  insertRecord(Id) {
    this.datosC.Id_Paciente = Id;
    this.datosC.Id_Doctor = this.idDoctor;
    this.serviceCrudC.postCita(this.datosC).subscribe(
      (res: any) => {
        if (res.Id === 0) {
          this.toastr.error('El Paciente ya esta asociado al Doctor', 'Error');
        } else {
          this.updateDataD.emit(true);
          this.toastr.success('Enviado correctamente', 'Paciente Agregado a Doctor');
        }
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
