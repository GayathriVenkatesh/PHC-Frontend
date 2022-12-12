import { Component, OnInit } from '@angular/core';
import { RejectModalComponent } from '../reject-modal/reject-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApproveModalComponent } from '../approve-modal/approve-modal.component';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';

@Component({
  selector: 'app-discharged-patients',
  templateUrl: './discharged-patients.component.html',
  styleUrls: ['./discharged-patients.component.css']
})
export class DischargedPatientsComponent implements OnInit {

  modalRef: MdbModalRef<RejectModalComponent> | null = null;

  patients: DischargedPatient[];
  searchText: String;  
  pipe: DatePipe;
  clear: boolean;
  dataSource = new MatTableDataSource<DischargedPatient>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['date', 'id', 'name', 'nrc', 'mobile', 'address', 'pincode', 'action'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  set fromDate(d: Date) { 
    if (this.filterForm && this.filterForm.get('fromDate') && this.filterForm.get('fromDate')) {
      this.filterForm = new FormGroup({
        fromDate: new FormControl(),
        toDate: new FormControl(),
    });
    }
  }
  set toDate(d: Date) { 
    this.filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  }

  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService) {
    
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(new Date()),
  });

  ngOnInit(): void {
    this.searchText = ""; 
    this.pipe = new DatePipe('en');
    console.log("kugbkjlj", this.fromDate, this.toDate)

    this.patientService.getDischargedPatientsPhc(localStorage.getItem('phc') || '').subscribe(data => {
      this.patients = data;
      // this.patients = [
      //   {name: 'gaya', address: 'hsr', pincode: '560075', mobileNumber: '9876543210', caseId: 1, samId: 1, rchId: 1, date: new Date()},
      //   {name: 'aaru', address: 'queen', pincode: '123456', mobileNumber: '8765432109', caseId: 2, samId: 2, rchId: 2, date: new Date("09-11-2022")}
      // ]
      this.dataSource = new MatTableDataSource(this.patients);
      
      this.dataSource.filterPredicate = (data: any, filter: any) =>{
        var b = true;
        if (this.fromDate && this.toDate) {
          b = new Date(data.date) >= this.fromDate && new Date(data.date) <= this.toDate;
        }
        var f = String(filter);
        return (String(data.name).includes(f) ||
        String(data.samId) == f || String(data.rchId) == f || String(data.mobileNumber).includes(f) ||
        String(data.address).includes(f) || String(data.pincode).includes(f)) && b;
        
      }
      console.log("DATA BEING", this.dataSource);
    }) 
  }

  resetDate() {
    this.dataSource.filter = '';
    this.fromDate = new Date("06-10-1998");
    this.toDate = new Date("");
    console.log("gaye", this.fromDate, this.toDate)
  }

  applyFilterDate() {
    this.dataSource.filter = '' + Math.random();
  }

  applyFilterText(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openModal(patient: DischargedPatient) {
  console.log("HELLO", patient);
    this.modalRef = this.modalService.open(RejectModalComponent, {
      modalClass: 'modal-md',
      data : {patient: patient}
    })
  }

  openApproveModal(patient: DischargedPatient) {
  this.patientService.approve(patient.caseId).subscribe();
    this.modalRef = this.modalService.open(ApproveModalComponent, {
      modalClass: 'modal-lg',
      data: {patient: patient}
    })
  }

  cancel() {
    location.reload();
  }
}


