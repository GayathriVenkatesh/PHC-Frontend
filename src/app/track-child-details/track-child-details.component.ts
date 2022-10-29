import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SmallModalComponent } from '../small-modal/small-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Discharge } from '../model/discharge';
import { FollowupService } from '../service/followup.service';
import { FollowupSchedule } from '../model/followup-schedule';

@Component({
  selector: 'app-track-child-details',
  templateUrl: './track-child-details.component.html',
  styleUrls: ['./track-child-details.component.css']
})
export class TrackChildDetailsComponent implements OnInit {

  visible = false;
  modalRef: MdbModalRef<ModalComponent> | null = null;

  patient: Patient;
  discharge: Discharge;
  caseId: String;
  comorbid: String[];
  dur: number;
  disDate: Date;
  adDate: Date;
  followups: FollowupSchedule[];

  constructor(private router: Router,private modalService: MdbModalService, private patientService: PatientService, private followupService: FollowupService) {}

  openModal(followupId: number, followupDate: Date) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg',
      data: { followupId: followupId,
                     followupDate: followupDate},
    });
  }

  openSmallModal() {
    this.modalRef = this.modalService.open(SmallModalComponent, {
      modalClass: 'modal-sm'
    })
  }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
  ngOnInit(): void {
  this.caseId = this.router.url.split("/")[2];
this.patientService.findByCaseId(this.caseId).subscribe(data => {

this.patient = data;
this.disDate = new Date(this.patient.dischargeDate);
this.adDate = new Date(this.patient.admissionDate);
this.dur = Math.floor((this.disDate.getTime() - this.adDate.getTime()) / 1000 / 60 /60 / 24);
console.log("child: ", this.patient);

});

this.patientService.findDischargeByCaseId(this.caseId).subscribe(data => {
    this.discharge=data;
    console.log("discharged child: ", this.discharge);
    });

    this.patientService.getComorbid(this.caseId).subscribe(data => {
        this.comorbid=data;
        console.log("comorbid child: ", this.comorbid);
        });

this.followupService.getFollowupScheduleById(this.caseId).subscribe(data => {
    this.followups = data;
    console.log("followups: ",this.followups);

});

  }

}
