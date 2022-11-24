import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.css']
})
export class RejectModalComponent implements OnInit {

    patient: DischargedPatient;
  constructor(private patientService: PatientService, public modalRef: MdbModalRef<RejectModalComponent>) { }

  ngOnInit(): void {
  }

reject(): void {
console.log("HIIII", this.patient);
  this.patientService.reject(this.patient.caseId).subscribe();
//   location.reload();
}
}