import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Discharge } from '../model/discharge';

@Component({
  selector: 'app-discharge-summary',
  templateUrl: './discharge-summary.component.html',
  styleUrls: ['./discharge-summary.component.css']
})
export class DischargeSummaryComponent implements OnInit {

  patient: Patient;
  child: Patient;
  discharge: Discharge;
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
      console.log("Discharge patient", this.patient);

      this.patientService.findBySamId(this.samId.toString())
        .subscribe(data => {
          this.child = data[0];
        });

        this.patientService.findDischargeById(this.dischargeId)
        .subscribe(data => {
          this.discharge = data;  
          console.log("DISCHARGE", data)
        });
    }); 
  }

}
