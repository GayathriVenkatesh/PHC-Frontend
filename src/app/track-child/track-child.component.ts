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
  awaitingAsha: Patient[];
  asha: number[];
  pipe: DatePipe;
  dataSource = new MatTableDataSource<Patient>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['id', 'name', 'date', 'mobile', 'nrc', 'asha', 'status'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  constructor(private patientService: PatientService) {
     this.asha = [];
  }

  ngOnInit(): void {
    // this.patients = [
    //   {name: 'aaru', status: "complete", address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", 
    //   dischargeDate: new Date(), admissionDate: new Date(), dischargeSd: -1, dischargeId: "1", samNum: "4987", ashaId: 1, ashaName: ""},
    //   {name: 'gayu', status: "complete", address: 'hsr', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", 
    //   dischargeDate: new Date("2019-01-16"), admissionDate: new Date("2019-01-16"), dischargeSd: -1, dischargeId: "1", samNum: "3056", ashaId: 1, ashaName: ""},      
    // ]
    // this.dataSource = new MatTableDataSource(this.patients);
    this.patientService.findAll().subscribe(data1 => {
      this.awaitingAsha = data1;
      for(var i = 0; i < data1.length; i++) {
        this.asha.push(this.awaitingAsha[i].caseId);
      }

//   this.children=[];
      this.patientService.trackChild().subscribe(data => {
      console.log(data);
      console.log(this.asha);
        this.patients = data;
        for(var i=0;i<data.length;i++){
                this.patients[i].address="";
                }
        for(var i=0;i<data.length;i=i+5){
          this.patients[i].status="FOLLOWUPS - NORMAL";
          if(i+1<data.length){
          this.patients[i+1].status="MISSING FOLLOWUPS";}
          if(i+2<data.length){
          this.patients[i+2].status="FOLLOWUPS - SAM";}
          if(i+3<data.length){
          this.patients[i+3].status="FOLLOWUPS - MAM";}
          if(i+4<data.length){
          this.patients[i+4].status="FOLLOWUPS - NORMAL";}
        }

        for(var i=0;i<data.length;i++){
             if(this.asha.indexOf(data[i].caseId)!=-1){
             console.log("HI YES", data[i].caseId);
             this.patients[i].status="AWAITING ASHA ASSIGNMENT";
             }
             else{
             console.log("NO", data[i].caseId);
             }
         }
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
    //this.dataSource.filterPredicate = this.dateFilter();
this.pipe = new DatePipe('en');
        this.dataSource.filterPredicate = (data: any, filter: any) =>{
          if (this.fromDate && this.toDate) {
          console.log("DATE IS THERE: ", this.fromDate,this.toDate);
          var x = (new Date(data.dischargeDate) >= this.fromDate) && (new Date(data.dischargeDate) <= this.toDate);
            //console.log("X ", x, typeof new Date(data.dischargeDate), typeof this.fromDate);
            return x;
          }
          else {
          console.log("no date");
            return data.name.includes(filter) ||
            data.nrcFrom.includes(filter) || data.mobileNumber.includes(filter) ||
            data.ashaName.includes(filter) || data.samNum.includes(filter);
         }
      }

    });
    });

  }

  resetDate() {
    this.dataSource.filter = '';
  }

  applyFilterDate() {
  console.log("HELLO", this.fromDate,this.toDate)
      //  console.log(this.dataSource);
    this.dataSource.filter = '' + Math.random();
  }

  applyFilterText(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

