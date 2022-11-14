import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import {Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-track-child',
  templateUrl: './track-child.component.html',
  styleUrls: ['./track-child.component.css']
})
export class TrackChildComponent implements OnInit {

  patients: Patient[];
  discharge: Patient;
  searchText: String;
  pipe: DatePipe;
  dataSource = new MatTableDataSource<Patient>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['id', 'name', 'date', 'mobile', 'nrc', 'asha', 'status'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }
  
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.trackChild().subscribe(data => {
      console.log(data);
      this.patients = data;
    });
    this.searchText = "";

    // this.patients = [
    //   {name: 'aaru', address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", 
    //   dischargeDate: new Date(), admissionDate: new Date(), dischargeSd: -1, dischargeId: "1", samNum: "4987", ashaId: 1, ashaName: ""},
    //   {name: 'gayu', address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", 
    //   dischargeDate: new Date("2019-01-16"), admissionDate: new Date("2019-01-16"), dischargeSd: -1, dischargeId: "1", samNum: "3056", ashaId: 1, ashaName: ""},      
    // ]
    this.dataSource = new MatTableDataSource(this.patients);

    this.pipe = new DatePipe('en');
      this.dataSource.filterPredicate = (data: any, filter: any) =>{
        if (this.fromDate && this.toDate) {
          return data.dischargeDate >= this.fromDate && data.dischargeDate <= this.toDate;
        }
        else {
          return data.name.includes(filter) || 
          data.nrcFrom.includes(filter) || data.mobileNumber.includes(filter) || 
          data.ashaName.includes(filter) || data.samNum.includes(filter);
        }
    }
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
}

