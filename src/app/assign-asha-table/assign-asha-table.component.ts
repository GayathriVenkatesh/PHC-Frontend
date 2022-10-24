import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AshaModalComponent } from '../asha-modal/asha-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-assign-asha-table',
  templateUrl: './assign-asha-table.component.html',
  styleUrls: ['./assign-asha-table.component.css']
})
export class AssignAshaTableComponent implements OnInit {

  patients: Patient[];
  children: Patient[];  
  samId: String;
  dischargeId: String;
  modalRef: MdbModalRef<AshaModalComponent> | null = null;

  constructor(private patientService: PatientService, private modalService: MdbModalService) {
  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
      for(var i=0; i<this.patients.length; i++) {
        this.samId = this.patients[i].samId;
        this.patientService.findBySamId(this.samId.toString())
        .subscribe(data => {
          this.children.push(data);  
        });
      }      
  })
}

  openModal() {
    this.modalRef = this.modalService.open(AshaModalComponent, {
      modalClass: 'modal-md'
    })
  }
}