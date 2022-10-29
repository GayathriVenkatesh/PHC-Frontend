import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

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
        this.patients = data;
  // console.log("wassup2",this.patients);
//   this.hello();
console.log("track child: ",this.patients);

    });


  }

}
