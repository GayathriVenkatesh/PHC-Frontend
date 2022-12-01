import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddNrcModalComponent } from '../add-nrc-modal/add-nrc-modal.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { DischargedPatient } from '../model/discharged-patient';
import { NRC } from '../model/nrc';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  modalRef: MdbModalRef<AddNrcModalComponent> | null = null;
  patients: NRC[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<NRC>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['name', 'address', 'pincode', 'contact', 'action'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }


  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService) {
    
  }
  ngOnInit(): void {
    this.patients = [
      {name: "Gayathri", address: "3rd Road, Chennai", pincode: "560075", contact: "9878263726"},
      {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
      {name: "Aanchal", address: "5th Road, Delhi", pincode: "560075", contact: "9878263726"},
      {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
      {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
      {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
    ]
    this.dataSource = new MatTableDataSource(this.patients);
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
  
  openModal(name: String, address: String, pincode: String, contact: String, title: String) {
    this.modalRef = this.modalService.open(AddNrcModalComponent, {
      modalClass: 'modal-md',
      data: {
        name: name,
        address: address,
        pincode: pincode,
        contact: contact,
        title: title
      }
    })
  }

}
