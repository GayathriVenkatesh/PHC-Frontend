import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { PhcService } from '../service/phc.service';
import { PHC } from '../model/phc';
import { RejectPhc } from '../model/reject-phc';

@Component({
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.css']
})
export class RejectModalComponent implements OnInit {

    patient: DischargedPatient;
    phc: PHC[];
    reject: RejectPhc;
  constructor(private patientService: PatientService, private phcService: PhcService, public modalRef: MdbModalRef<RejectModalComponent>) { }

  ngOnInit(): void {
  this.reject = new RejectPhc();
  this.reject.caseId = this.patient.caseId;
  this.phcService.findAll().subscribe(data => {
  this.phc = data;
  });
  }

onSubmit(): void {
console.log("HIIII", this.patient);
console.log("REJECT", this.reject);
  //this.patientService.reject(this.patient.caseId).subscribe();
    this.patientService.rejectPhc(this.reject).subscribe();
  //this.modalRef.close();
   location.reload();
}
}