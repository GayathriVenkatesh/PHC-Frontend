import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-track-child',
  templateUrl: './track-child.component.html',
  styleUrls: ['./track-child.component.css']
})
export class TrackChildComponent implements OnInit {

  patients: Patient[];
  discharge: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
//   this.children=[];
      this.patientService.trackChild().subscribe(data => {
      console.log(data);
        this.patients = data;
  
    });


  }

}

