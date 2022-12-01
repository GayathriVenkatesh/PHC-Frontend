import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddDoctorModalComponent } from '../add-doctor-modal/add-doctor-modal.component';
import { AddPhcModalComponent } from '../add-phc-modal/add-phc-modal.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { DischargedPatient } from '../model/discharged-patient';
import { NrcDoctor } from '../model/nrc-doctor';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-admin-nrc-doctor',
  templateUrl: './admin-nrc-doctor.component.html',
  styleUrls: ['./admin-nrc-doctor.component.css']
})
export class AdminNrcDoctorComponent implements OnInit {
  modalRef: MdbModalRef<AddPhcModalComponent> | null = null;
  doctor: NrcDoctor[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<NrcDoctor>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['username', 'password', 'nrc', 'action'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }


  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService) {
    
  }
  ngOnInit(): void {
    this.doctor = [
      {username: "Gayathri", password: "1234", nrcId: "VVH"},
      {username: "Aarushi", password: "5678", nrcId: "VVH"},
      {username: "Aanchal", password: "1234", nrcId: "VVH"},
      {username: "Manasa", password: "5678", nrcId: "VVH"},
       
    ]
    this.dataSource = new MatTableDataSource(this.doctor);
  }

  resetDate() {
    this.dataSource.filter = '';
  }

  applyFilterDate() {
    this.dataSource.filter = '' + Math.random();
  }

  applyFilterText(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openConfirm() {
    this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
      modalClass: 'modal-sm',
    })
  }

  openModal(name: String, pw: String, parentName: String, parent: String, title: String) {
    this.modalRef = this.modalService.open(AddDoctorModalComponent, {
      modalClass: 'modal-md',
      data: {
        username: name,
        password: pw,
        parent: parent,
        parentName: parentName,
        title: title
      }
    })
  }
}
