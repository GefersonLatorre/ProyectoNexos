import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelCitasComponent } from './panel-citas/panel-citas.component';
import { DoctorComponent } from './panel-citas/doctor/doctor.component';
import { DoctorListComponent } from './panel-citas/doctor-list/doctor-list.component';
import { PacienteComponent } from './panel-citas/paciente/paciente.component';
import { PacienteListComponent } from './panel-citas/paciente-list/paciente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorListPacienteComponent } from './panel-citas/doctor-list-paciente/doctor-list-paciente.component';
import { PacienteListDoctorComponent } from './panel-citas/paciente-list-doctor/paciente-list-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelCitasComponent,
    DoctorComponent,
    DoctorListComponent,
    PacienteComponent,
    PacienteListComponent,
    DoctorListPacienteComponent,
    PacienteListDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
