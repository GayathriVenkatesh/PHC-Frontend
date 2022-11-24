import { Component, OnInit } from '@angular/core';
import { AshaFollowupsService } from '../service/asha-followups.service';
import { FollowupSchedule } from '../model/followup-schedule';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-asha-patient',
  templateUrl: './asha-patient.component.html',
  styleUrls: ['./asha-patient.component.css']
})
export class AshaPatientComponent implements OnInit {
  searchText: String;
  ashaId: String;
  followups: FollowupSchedule[];

  constructor(private ashaFollowupsService: AshaFollowupsService) { }

  ngOnInit(): void {
    this.ashaId = (localStorage.getItem('asha') || '');
    this.ashaFollowupsService.findById(this.ashaId).subscribe(data => {
    this.followups = data;
    console.log(data);
    });
    this.searchText = "";
  }

}
