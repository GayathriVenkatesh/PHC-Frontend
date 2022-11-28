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
    // this.followups = [
    //   {nextCommunity: new Date(), nextNrc: new Date(), caseId: 1, followupId: 1, scheduleId: 1, samNum: 1, 
    //     childName: "gayu", followupDate: new Date(), ashaName: "hi", ashaNumber: "1", followupsDone: 2, 
    //     ashaId: 1, type: "community", rchId: 1, mobileNumber: "7675765675"},
    //   {nextCommunity: new Date("01-11-2022"), nextNrc: new Date(), caseId: 1, followupId: 1, scheduleId: 1, samNum: 1, 
    //     childName: "aaru", followupDate: new Date(), ashaName: "hi", ashaNumber: "1", followupsDone: 2, 
    //     ashaId: 1, type: "community", rchId: 1, mobileNumber: "7675765675"},
    // ]

    this.searchText = "";
  }

}
