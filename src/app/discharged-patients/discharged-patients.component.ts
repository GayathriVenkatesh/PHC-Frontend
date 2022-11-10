import { Component, OnInit } from '@angular/core';
import { RejectModalComponent } from '../reject-modal/reject-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApproveModalComponent } from '../approve-modal/approve-modal.component';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.patientService.getDischargedPatients().subscribe(data => {
      this.patients = data;
      console.log("discharged patients: ",this.patients[0].name);
    });
    this.searchText = "";
  }

  openModal() {
    this.modalRef = this.modalService.open(RejectModalComponent, {
      modalClass: 'modal-md'
    })
  }

  openApproveModal(patient: DischargedPatient) {
  this.patientService.approve(patient.caseId).subscribe();
//     location.reload();

    this.modalRef = this.modalService.open(ApproveModalComponent, {
      modalClass: 'modal-lg',
      data: {patient: patient}
    })
//     setTimeout(
//         function(){
//         location.reload();
//         },
//         5000);
  }

}


