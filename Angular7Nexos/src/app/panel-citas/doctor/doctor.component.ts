import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [
  ]
})
export class DoctorComponent implements OnInit {
  datosD: Doctor = new Doctor();

  constructor(private serviceCrudD: DoctorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  uploadDatosD(data: Doctor) {
    this.datosD = data;
  }

  resetForm() {
    this.datosD = new Doctor();
  }

  onSubmit() {
    if (this.datosD.Id == 0 || this.datosD.Id == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudD.postDoctor(this.datosD).subscribe(
      res => {
        this.toastr.success('Enviado correctamente', 'Doctor Registrado');
        this.resetForm();
        this.serviceCrudD.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudD.putDoctor(this.datosD).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Enviado correctamente', 'Doctor Modificado');
        this.serviceCrudD.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
