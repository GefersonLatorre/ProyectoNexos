import { Component, OnInit, Input } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-paciente-list-doctor',
  templateUrl: './paciente-list-doctor.component.html',
  styles: [
  ]
})
export class PacienteListDoctorComponent implements OnInit {

  @Input("vd") idPaciente: number;
  @Input("namePaciente") namePaciente: number;
  doctoresCodigos: any = {};
  loadingDoctores: boolean = false;
  idDoctor: number = 0;

  constructor(public serviceCrudC: CitaService, public serviceCrudD: DoctorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.updateDataP();
  }

  updateDataP() {
    this.serviceCrudC.refreshList(this.idDoctor, this.idPaciente,);
    this.getDoctores();
  }

  getDoctores() {
    this.loadingDoctores = true;
    this.serviceCrudD.getDoctores().subscribe((doctores: Doctor[]) => {
      doctores.map((d) => {
        this.doctoresCodigos[d.Id] = d.Nombre;
      });
      this.loadingDoctores = false;
    }, () => {
      this.loadingDoctores = false;
    });
  }

  onDelete(Id) {
    if (confirm('¿Estás segura de eliminar este doctor')) {
      this.serviceCrudC.deleteCita(Id)
        .subscribe(res => {
          this.toastr.warning('Eliminado Correctamente', 'Doctor Eliminado de Paciente');
          this.updateDataP();
        },
          err => {
            this.toastr.error('Error', err);
          })
    }
  }

}
