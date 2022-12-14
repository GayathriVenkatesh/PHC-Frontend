import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import {Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FollowupService } from '../service/followup.service';
import { FollowupSchedule } from '../model/followup-schedule';

@Component({
  selector: 'app-track-child-nrc',
  templateUrl: './track-child-nrc.component.html',
  styleUrls: ['./track-child-nrc.component.css']
})
export class TrackChildNrcComponent implements OnInit {

  patients: Patient[];
  discharge: Patient;
  searchText: String;
  awaitingAsha: Patient[];
  asha: number[];
  pipe: DatePipe;
  dataSource = new MatTableDataSource<Patient>;
followups: FollowupSchedule[] | undefined;
    lastSd: number;
    finalP: Patient[];
    x: number;
    statuses: string[];

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['id', 'name', 'date', 'mobile', 'nrc', 'asha', 'status'];
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

  constructor(private patientService: PatientService, private followupService: FollowupService) {
     this.asha = [];
     this.statuses = [];
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
        var b = true;
        if (this.fromDate && this.toDate) {
          b = new Date(data.dischargeDate) >= this.fromDate && new Date(data.dischargeDate) <= this.toDate;
        }
        var f = String(filter)
          return (String(data.name).includes(f) || 
          String(data.nrcFrom).includes(f) || String(data.mobileNumber).includes(f) || 
          String(data.ashaName).includes(f) || String(data.samNum).includes(f)) && b;
        
    }
    this.sdCalc();
    });
    });
  }

async sdCalc(){

console.log("HELLO 123", this.patients);
this.finalP = this.patients;
      for(this.x=0;this.x<this.finalP.length;this.x++){
      console.log("STATUS: ", this.statuses);
      console.log("X: ", this.x);

      const response = await this.followupService.getFollowupScheduleById(this.patients[this.x].caseId.toString()).toPromise();
      console.log("RESPONSE: ", response);
        this.followups = response;
        console.log("followups: ",this.followups);
        if(this.followups?.length && this.followups.length>0){
                    this.lastSd=this.followups[this.followups?.length-1].sdRange;
                    //console.log("lastSD: ", this.lastSd);
                    console.log("PATientsss: ", this.patients, this.x);
                    if(this.lastSd==-4){
                    console.log("FOLLOWUPS - SAM");
                    this.statuses.push("FOLLOWUPS - SAM");
                    //this.patients[i].status="FOLLOWUPS - SAM";
                    }
                    if(this.lastSd==-3){
                    this.statuses.push("FOLLOWUPS - SAM");
                    console.log("FOLLOWUPS - SAM");
                    //this.patients[i].status="FOLLOWUPS - SAM";
                    }
                    if(this.lastSd==-2){
                    this.statuses.push("FOLLOWUPS - MAM");
                    console.log("FOLLOWUPS - MAM");
                    //this.patients[i].status="FOLLOWUPS - MAM";
                    }
                    if(this.lastSd==-1){
                    this.statuses.push("FOLLOWUPS - MAM");
                    console.log("FOLLOWUPS - MAM");
                    //this.patients[i].status="FOLLOWUPS - MAM";
                    }
                    if(this.lastSd==0){
                    this.statuses.push("FOLLOWUPS - Normal");
                    console.log("FOLLOWUPS - Normal");
                    //this.patients[i].status="FOLLOWUPS - Normal";
                    }}
                    else{
                    this.statuses.push("");
                    }}

       // this.followupService.getFollowupScheduleById(this.patients[this.x].caseId.toString()).subscribe(data => {
         //   console.log("###X: ", this.x);
           // this.followups = data;
       //     console.log("followups: ",this.followups);
//console.log("HELLO 123456", this.patients);
//            if(this.followups.length>0){
  //          this.lastSd=this.followups[this.followups.length-1].sdRange;
    //        //console.log("lastSD: ", this.lastSd);
      //      console.log("PATientsss: ", this.patients, this.x);
        //    if(this.lastSd==-4){
          //  console.log("FOLLOWUPS - SAM");
   //         this.statuses.push("FOLLOWUPS - SAM");
            //this.patients[i].status="FOLLOWUPS - SAM";
           // }
     //       if(this.lastSd==-3){
       //     this.statuses.push("FOLLOWUPS - SAM");
         //   console.log("FOLLOWUPS - SAM");
            //this.patients[i].status="FOLLOWUPS - SAM";
//            }
  //          if(this.lastSd==-2){
    //        this.statuses.push("FOLLOWUPS - MAM");
      //      console.log("FOLLOWUPS - MAM");
            //this.patients[i].status="FOLLOWUPS - MAM";
        //    }
//            if(this.lastSd==-1){
  //          this.statuses.push("FOLLOWUPS - MAM");
    //        console.log("FOLLOWUPS - MAM");
            //this.patients[i].status="FOLLOWUPS - MAM";
      //      }
        //    if(this.lastSd==0){
          //  this.statuses.push("FOLLOWUPS - Normal");
//            console.log("FOLLOWUPS - Normal");
            //this.patients[i].status="FOLLOWUPS - Normal";
  //          }


    //        }
      //      else{
        //    this.statuses.push("");}
          //  console.log("STATUS: ", this.statuses);

       // });
                 for(var i=0;i<this.patients.length;i++){
                                         if(this.asha.indexOf(this.patients[i].caseId)!=-1){
                                         console.log("HI YES", this.patients[i].caseId);
                                         this.statuses[i]="AWAITING ASHA ASSIGNMENT";
                                         }
                                         else{
                                         //console.log("NO", data[i].caseId);
                                         }
                                     }


       // }
        //sleep(10);
        for(var i=0;i<this.patients.length;i++){
                                             this.patients[i].status=this.statuses[i];
                                             }
                                             console.log("chal jaa", this.statuses);
                                             console.log("chal jaa2", this.patients);



}




  resetDate() {
    this.dataSource.filter = '';
    this.fromDate = new Date("");
    this.toDate = new Date("");
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

