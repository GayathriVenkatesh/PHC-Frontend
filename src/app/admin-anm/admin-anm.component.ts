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
import { Doctor } from '../model/doctor';
import { PHC } from '../model/phc';
import { PatientService } from '../service/patient.service';
import { AnmService } from '../service/anm.service';

@Component({
  selector: 'app-admin-anm',
  templateUrl: './admin-anm.component.html',
  styleUrls: ['./admin-anm.component.css']
})
export class AdminAnmComponent implements OnInit {
  modalRef: MdbModalRef<AddPhcModalComponent> | null = null;
  anm: Doctor[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<Doctor>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['username', 'password', 'phc', 'action'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }


  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService, private anmService: AnmService) {
    
  }
  ngOnInit(): void {
   // this.anm = [
    //  {username: "Gayathri", password: "1234", phcId: "Agara PHC"},
    //  {username: "Aarushi", password: "5678", phcId: "Anjanapura PHC"},
   //   {username: "Aanchal", password: "1234", phcId: "Arakere PHC"},
   //   {username: "Manasa", password: "5678", phcId: "Begur PHC"},
       
   // ]
    //this.dataSource = new MatTableDataSource(this.anm,);
    //console.log("anm id: ", this.id);
    this.anmService.findAll().subscribe(data => {
                 this.anm = data;
                 console.log("doctor: ", this.anm);
                     this.dataSource = new MatTableDataSource(this.anm);
                 });
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

  openModal(id: number | null, name: String, pw: String, parentName: String, parent: String, title: String) {
    this.modalRef = this.modalService.open(AddDoctorModalComponent, {
      modalClass: 'modal-md',
      data: {
        username: name,
        password: pw,
        parent: parent,
        parentName: parentName,
        title: title,
        entity: 'ANM',
        id: id
      }
    })
  }
}
