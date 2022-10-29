import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';

@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.component.html',
  styleUrls: ['./approve-modal.component.css']
})
export class ApproveModalComponent implements OnInit {

    patient: DischargedPatient;
  constructor(public modalRef: MdbModalRef<ApproveModalComponent>) { }

  ngOnInit(): void {
  console.log(this.patient);

  }

}
