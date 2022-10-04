import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient;
  rchId: String;

  constructor(private router: Router, private patientService: PatientService) {
  }

  ngOnInit() {
    console.log("KJBJBJB", this.router.url);
    this.rchId = this.router.url.split("/")[2];
    this.patientService.findByRchId(this.rchId).subscribe(data => {
      this.patient = data;
      console.log("PATIENT", this.patient);
    });

  }

}
