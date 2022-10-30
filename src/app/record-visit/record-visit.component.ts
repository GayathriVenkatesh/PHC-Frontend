import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.css']
})
export class RecordVisitComponent implements OnInit {

    followup: Followup;
    caseId: String;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: String;
  constructor(private route: ActivatedRoute,
                    private router: Router,
                    private followupService: FollowupService) {
                     this.followup = new Followup();
                     this.followup.followupDate = new Date();
//                      this.followup.followupId=20;
                     }

    onSubmit(){
    console.log("NEW Followup ", this.followup);

    this.followupService.save(this.followup).subscribe(result =>
    this.onSaveSchedule());
    }

    onSaveSchedule(){
//               this.caseId = this.router.url.split("/")[2];
      this.followupService.findLast().subscribe(data => {
      this.lastFollowup = data;
      console.log("last followup schedule: ",this.lastFollowup);
      this.followupSchedule = new FollowupSched();
      this.followupSchedule.caseId = this.caseId;
      this.followupSchedule.followupId = this.lastFollowup.followupId;
      this.followupSchedule.type = "GENERAL";
      this.followupSchedule.status = "DONE";
      this.followupSchedule.followupDate = this.lastFollowup.followupDate;
//       this.followupSchedule.followupDate = new Date();
      console.log("HIIII", this.followupSchedule);
      this.followupService.saveFollowup(this.followupSchedule).subscribe(result =>
                     this.gotoFollowups()
                     );
           });

//       this.gotoFollowups();
    }

    gotoFollowups(){
    this.router.navigate(['/followup-list']);
    }

  ngOnInit(): void {
  this.caseId = this.router.url.split("/")[2];
    console.log("HELLO AARU", this.caseId);

  }

}
