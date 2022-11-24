import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import {Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  constructor(private patientService: PatientService) {
   this.asha = [];
   }

  ngOnInit(): void {
  this.patientService.findAll().subscribe(data1 => {
        this.awaitingAsha = data1;
        console.log("lol",this.awaitingAsha);
        for(var i=0;i<data1.length;i++){
        console.log("hi", this.awaitingAsha[i].caseId, "bye", this.asha)
        this.asha.push(this.awaitingAsha[i].caseId);
        }
        console.log("lol",this.asha);
//         this.hello();


//   this.children=[];
      this.patientService.trackChild().subscribe(data => {
      console.log(data);
      console.log(this.asha);
        this.patients = data;
        for(var i=0;i<data.length;i++){
                this.patients[i].address="";
                }
        for(var i=0;i<data.length;i=i+5){
//         this.patients[i].address="";
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



    });
    });
    this.searchText = "";

  }

}

