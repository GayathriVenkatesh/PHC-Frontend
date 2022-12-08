import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SmallModalComponent } from '../small-modal/small-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AshaFollowupsService } from '../service/asha-followups.service';
import { Followup } from '../model/followup';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
@Component({
  selector: 'app-asha-patient-followup',
  templateUrl: './asha-patient-followup.component.html',
  styleUrls: ['./asha-patient-followup.component.css']
})

export class AshaPatientFollowupComponent implements OnInit {

  followups: Followup[];
  caseId: String;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  searchText: String;
  patient: Patient;

  constructor(private router: Router, private modalService: MdbModalService, private ashaFollowupsService: AshaFollowupsService, private patientService: PatientService) {}

  openModal(followupId: number, followupDate: Date) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg',
      data: { followupId: followupId,
              followupDate: followupDate},
    })
  }

  openSmallModal() {
    this.modalRef = this.modalService.open(SmallModalComponent, {
      modalClass: 'modal-sm'
    })
  }

  ngOnInit(): void {
      this.caseId = this.router.url.split("/")[2];
      this.ashaFollowupsService.getFollowups(this.caseId).subscribe(data => {
          this.followups = data;
          console.log(data);
      });
      // this.followups = [
      //     {followupId: 0, scheduleId: "1", sdRange:0, dietChart: '', dietAdequacy: '', coMorbidities: '', treatment: '',
      //       followupDate: new Date(), height: 0, weight: 0, muac: 0, headCircumference: 0, provisionalDiagnosis: '',
      //       place:"", otherSymptoms: '', reasonFollowup: '', reasonNotComing: '', status: false, stdev: 0, chiefComplaints: ''},
      //   ]
      this.patientService.findByCaseId(this.caseId).subscribe(data => {
      this.patient = data;

      });
    this.searchText = "";
  }

}

