import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorComponent } from './doctor/doctor.component';
import { PacienteComponent } from './paciente/paciente.component';
import { DoctorListPacienteComponent } from './doctor-list-paciente/doctor-list-paciente.component';
import { PacienteListDoctorComponent } from './paciente-list-doctor/paciente-list-doctor.component';

@Component({
  selector: 'app-panel-citas',
  templateUrl: './panel-citas.component.html',
  styles: [
  ]
})
export class PanelCitasComponent implements OnInit {

  @ViewChild(DoctorComponent) doctorComponent: DoctorComponent;
  @ViewChild(PacienteComponent) pacienteComponent: PacienteComponent;
  @ViewChild(DoctorListPacienteComponent) doctorListPacienteComponent: DoctorListPacienteComponent;
  @ViewChild(PacienteListDoctorComponent) pacienteListDoctorComponent: PacienteListDoctorComponent;

  constructor() { }
  panels: boolean = false;
  listP: boolean = false;
  listD: boolean = false;
  vp = null;
  vd = null;
  nameDoctor = null;
  namePaciente = null;

  ngOnInit(): void {
  }

  viewPanelDoctores(vd: any) {
    if (vd.Id != 0) {
      this.vd = vd.Id;
      this.namePaciente = vd.Nombre;
      this.panels = false;
      this.listD = true;
    } else {
      this.listD = false;
      this.panels = true;
    }
  }

  parentP(vp: any) {
    if (vp) {
      this.panels = true;
    } else {
      this.panels = false;
    }
    this.listP = false;
    this.listD = false;
    this.vp = null;
    this.vd = null;
  }

  parentD(vp: any) {
    if (vp.Id != 0) {
      this.vp = vp.Id;
      this.nameDoctor = vp.Nombre;
      this.panels = true;
      this.listP = true;
    } else {
      this.panels = false;
      this.listP = false;
      this.listD = false;
    }
  }

  parentfuncD(data: any) {
    this.doctorComponent.uploadDatosD(data);
  }

  parentfuncP(data: any) {
    this.pacienteComponent.uploadDatosP(data);
  }

  updateDataD() {
    this.doctorListPacienteComponent.updateDataD();
  }

  updateDataP() {
    this.pacienteListDoctorComponent.updateDataP();
  }

}
