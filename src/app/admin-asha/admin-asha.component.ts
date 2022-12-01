import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddPhcModalComponent } from '../add-phc-modal/add-phc-modal.component';
import { DischargedPatient } from '../model/discharged-patient';
import { ASHA } from '../model/asha-details';
import { PatientService } from '../service/patient.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-admin-asha',
  templateUrl: './admin-asha.component.html',
  styleUrls: ['./admin-asha.component.css']
})
export class AdminAshaComponent implements OnInit {
  modalRef: MdbModalRef<AddPhcModalComponent> | null = null;
  asha: ASHA[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<ASHA>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['name', 'parentName', 'address', 'pincode', 'contact', 'action'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }


  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService) {
    
  }
  ngOnInit(): void {
    this.asha = [
      {name: "Gayathri", address: "3rd Road, Chennai", pincode: "560075", contact: "9878263726", parentName: "Phc1"},
      {name: "Aarushi", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726", parentName: "Phc2"},
      {name: "Aanchal", address: "5th Road, Delhi", pincode: "560075", contact: "9878263726", parentName: "Phc3"},
      // {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
      // {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
      // {name: "Vani Vilas", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726"},
    ]
    this.dataSource = new MatTableDataSource(this.asha);
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
  
  openModal(name: String, address: String, pincode: String, contact: String, parentName: String, 
    title: String, entity: String, parent: String) {
    this.modalRef = this.modalService.open(AddPhcModalComponent, {
      modalClass: 'modal-md',
      data: {
        name: name,
        address: address,
        pincode: pincode,
        contact: contact,
        parentName: parentName,
        title: title,
        entity: entity,
        parent: parent
      }
    })
  }

}
