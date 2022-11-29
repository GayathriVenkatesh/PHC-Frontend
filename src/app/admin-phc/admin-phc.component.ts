import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddPhcModalComponent } from '../add-phc-modal/add-phc-modal.component';
import { DischargedPatient } from '../model/discharged-patient';
import { PHC } from '../model/phc';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-admin-phc',
  templateUrl: './admin-phc.component.html',
  styleUrls: ['./admin-phc.component.css']
})
export class AdminPhcComponent implements OnInit {
  modalRef: MdbModalRef<AddPhcModalComponent> | null = null;
  phc: PHC[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<PHC>;

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
    this.phc = [
      {name: "GYA", address: "3rd Road, Chennai", pincode: "560075", contact: "9878263726", parentName: "VVH"},
      {name: "ARN", address: "21st Road, Bengaluru", pincode: "560075", contact: "9878263726", parentName: "IGH"},
      {name: "CHL", address: "5th Road, Delhi", pincode: "560075", contact: "9878263726", parentName: "VVH"},
    ]
    this.dataSource = new MatTableDataSource(this.phc);
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

  openModal(name: String, address: String, pincode: String, contact: String, title: 
    String, parentName: String, entity: String, parent: String) {
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
        parent: parent,
      }
    })
  }

}
