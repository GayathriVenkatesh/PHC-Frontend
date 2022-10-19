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
  child: Patient;
  dischargeId: String;
  samId: String;

  constructor(private router: Router, private patientService: PatientService) {
  }

  ngOnInit() {
    this.dischargeId = this.router.url.split("/")[2];
    this.patientService.findByDischargeId(this.dischargeId)
    .subscribe(data => {
      this.patient = data;  
      this.samId = this.patient.samId;

      this.patientService.findBySamId(this.samId.toString())
        .subscribe(data => {
          this.child = data;  
        });
    }); 
  }

}
