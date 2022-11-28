import { Component, OnInit } from '@angular/core';
import { DateRangeComponent } from '../date-range/date-range.component';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AshaModalComponent } from '../asha-modal/asha-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FollowupService } from '../service/followup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  asha: Number;
  phc: Number;
  followups: Number;
  constructor(private followupService: FollowupService, private patientService: PatientService) { }

  ngOnInit(): void {
  this.patientService.findAllPhc(localStorage.getItem('phc') || '').subscribe(data => {
        this.asha = data.length;
//         this.hello();
        console.log("awaiting asha", this.asha);
      });

    this.patientService.getDischargedPatientsPhc(localStorage.getItem('phc') || '').subscribe(data => {
        this.phc = data.length;
        console.log("discharged patients: ",this.phc);
      });

      this.followupService.findFollowupSchedulePhc(localStorage.getItem('phc') || '').subscribe(data => {
            this.followups = data.length;
            console.log("followups", this.followups);
          });
  }

}
