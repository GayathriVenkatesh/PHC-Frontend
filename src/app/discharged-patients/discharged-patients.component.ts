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


  constructor(private router: Router, private patientService: PatientService, private modalService: MdbModalService) {
    
  }

  ngOnInit(): void {
    this.patientService.getDischargedPatients().subscribe(data => {
      this.patients = data;
      console.log("discharged patients: ",this.patients[0].name);
    });
    // this.patients = [
    //   {name: 'aaru', address: 'ytfghjgfc vbnkjjfd xcvbnkdu iut fghj iugjhki iughkjiuygh uighuuifhg uifghgh uyghkiuyh iugyhiuyhg', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: 1, rchId: 4, date: new Date()},
    //   {name: 'gayu', address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: 1, rchId: 2, date: new Date("2019-01-16")}
    // ]
    this.searchText = "";
    this.dataSource = new MatTableDataSource(this.patients);

    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data: any, filter: any) =>{
      if (this.fromDate && this.toDate) {
        return data.date >= this.fromDate && data.date <= this.toDate;
      }
      else {
        return data.name.includes(filter) || 
        data.samId == filter || data.rchId == filter || data.mobileNumber.includes(filter) || 
        data.address.includes(filter) || data.pincode.includes(filter);
      }
  }
    console.log(this.dataSource);
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

  openModal() {
    this.modalRef = this.modalService.open(RejectModalComponent, {
      modalClass: 'modal-md'
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


