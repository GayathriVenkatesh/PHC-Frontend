import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent implements OnInit {

  scheduleId: string;
  followup: Followup;
  caseId: string;
  otherReasonNotComing: string;

  constructor(private router: Router, private route: ActivatedRoute, public modalRef: MdbModalRef<CancelModalComponent>, private followupService: FollowupService, private patientService: PatientService) {
  this.followup = new Followup();
        this.followup.followupDate = new Date();}


  ngOnInit(): void {
  }

  onSubmit() {
      console.log("NEW Followup ", this.followup);
      this.followupService.save(this.followup).subscribe(result =>
        this.cancel()
      );
      //this.submitted = true;

    }

    cancel() {
        this.followupService.cancel(parseInt(this.scheduleId)).subscribe(result =>
          this.gotoFollowups()
        );
      }

      gotoFollowups() {
          this.router.navigate(['/followup-list']);
        }

}
