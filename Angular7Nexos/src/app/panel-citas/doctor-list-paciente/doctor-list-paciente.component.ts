import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CitaService } from 'src/app/services/cita.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-doctor-list-paciente',
  templateUrl: './doctor-list-paciente.component.html',
  styles: [
  ]
})
export class DoctorListPacienteComponent implements OnInit {

  @Input("vp") idDoctor: number;
  @Input("nameDoctor") nameDoctor: number;
  pacientesCodigos: any = {};
  loadingPacientes: boolean = false;
  idPaciente: number = 0;

  constructor(public serviceCrudC: CitaService, public serviceCrudP: PacienteService, private toastr: ToastrService) { }

  ngOnInit(): void {   
   this.updateDataD();
  }
 
  updateDataD() {
    this.serviceCrudC.refreshList(this.idDoctor, this.idPaciente);       
    this.getPacientes();
  }

  getPacientes() {
    this.loadingPacientes = true;
    this.serviceCrudP.getPacientes().subscribe((pacientes: Paciente[]) => {
      pacientes.map((p) => {
        this.pacientesCodigos[p.Id] = p.Nombre;
      }); 
      this.loadingPacientes = false;
    }, () => {
      this.loadingPacientes = false;
    });
  }

  onDelete(Id) {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.serviceCrudC.deleteCita(Id)
        .subscribe(res => {
          this.toastr.warning('Eliminado Correctamente', 'Paciente Eliminado de Doctor');
          this.updateDataD();
        },
          err => {
            this.toastr.error('Error', err);
          })
    }
  }

}
