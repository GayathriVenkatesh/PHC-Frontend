import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
      console.log("USERS", this.patients);
    });
  }

}
