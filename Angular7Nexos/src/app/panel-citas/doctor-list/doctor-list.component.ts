import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { Cita } from 'src/app/models/cita.model';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styles: [
  ]
})
export class DoctorListComponent implements OnInit {

  @Input("vd") idPaciente: number;
  @Output() public dataD: EventEmitter<Doctor> = new EventEmitter();
  @Output() public viewPanelsD: EventEmitter<Doctor> = new EventEmitter();
  @Output() public updateDataP: EventEmitter<boolean> = new EventEmitter();
  boton: boolean = false;
  datosC: Cita = new Cita();

  constructor(public serviceCrudD: DoctorService, public serviceCrudC: CitaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.serviceCrudD.refreshList();
    if (this.idPaciente != null) {
      this.boton = true;
    } else {
      this.boton = false;
    }
  }

  insertRecord(Id) {
    this.datosC.Id_Paciente = this.idPaciente;
    this.datosC.Id_Doctor = Id;
    this.serviceCrudC.postCita(this.datosC).subscribe(
      (res:any) => {
        if(res.Id === 0){
          this.toastr.error('El Doctor ya esta asociado al Paciente', 'Error');
        }else{
          this.updateDataP.emit(true);
          this.toastr.success('Enviado correctamente', 'Doctor Agregado a Paciente');
        }
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
