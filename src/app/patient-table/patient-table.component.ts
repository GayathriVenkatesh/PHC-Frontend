import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AshaModalComponent } from '../asha-modal/asha-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  patients: Patient[];
  modalRef: MdbModalRef<AshaModalComponent> | null = null;

  constructor(private patientService: PatientService, private modalService: MdbModalService) {
  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
      console.log("USERS", this.patients);
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(AshaModalComponent, {
      modalClass: 'modal-md'
    })
  }

}

