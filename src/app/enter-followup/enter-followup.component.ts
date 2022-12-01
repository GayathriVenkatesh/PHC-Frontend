import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-enter-followup',
  templateUrl: './enter-followup.component.html',
  styleUrls: ['./enter-followup.component.css']
})
export class EnterFollowupComponent implements OnInit {

  modalRef: MdbModalRef<CancelModalComponent> | null = null;
    followup: Followup;
    caseId: string;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: string;
    patient: Patient;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService, private followupService: FollowupService,
  private patientService: PatientService ) {
      this.followup = new Followup();
      this.followup.followupDate = new Date();
  }

  onSubmit() {
    console.log("NEW Followup ", this.followup);
    this.followupService.save(this.followup).subscribe(result =>
      this.update()
    );
  }

  update() {
    this.followupService.update(parseInt(this.scheduleId)).subscribe(result =>
      this.gotoFollowups()
    );
  }

  gotoFollowups() {
    this.router.navigate(['/followup-list']);
  }

  // back(): void {
  //   this.router.navigate(['/followup/{{this.scheduleId}}']);
  // }

  ngOnInit(): void {
    this.scheduleId = this.router.url.split("/")[2];
    console.log("HELLO AARU", this.caseId);
    this.patientService.findByCaseId(this.caseId).subscribe(data => {
      this.patient = data;
    })
  }

  openCancelModal() {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md'
    })
  }
}
