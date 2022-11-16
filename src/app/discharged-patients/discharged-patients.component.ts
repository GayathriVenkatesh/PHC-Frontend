import { Component, OnInit } from '@angular/core';
import { RejectModalComponent } from '../reject-modal/reject-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApproveModalComponent } from '../approve-modal/approve-modal.component';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-discharged-patients',
  templateUrl: './discharged-patients.component.html',
  styleUrls: ['./discharged-patients.component.css']
})
export class DischargedPatientsComponent implements OnInit {

  modalRef: MdbModalRef<RejectModalComponent> | null = null;

  patients: DischargedPatient[];
  searchText: String;
//   constructor(private patientService: PatientService,private modalService: MdbModalService) {}
constructor(private router: Router, private patientService: PatientService,private modalService: MdbModalService) {}

range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(new Date()),
  });

  ngOnInit(): void {
    this.patientService.getDischargedPatientsPhc(localStorage.getItem('phc') || '').subscribe(data => {
      this.patients = data;
      console.log("discharged patients: ",this.patients[0].name);
    });
    this.searchText = "";

  }

  openModal(patient: DischargedPatient) {
    this.modalRef = this.modalService.open(RejectModalComponent, {
      modalClass: 'modal-md',
      data : {patient: patient}
    })
  }

  openApproveModal(patient: DischargedPatient) {
  this.patientService.approve(patient.caseId).subscribe();
//     location.reload();

    this.modalRef = this.modalService.open(ApproveModalComponent, {
      modalClass: 'modal-lg',
      data: {patient: patient}
    })
  }

  cancel(){
//       setTimeout(
//           function(){
          location.reload();
//           },
//           100);
  }

}


