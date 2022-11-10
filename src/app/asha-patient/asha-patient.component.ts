import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asha-patient',
  templateUrl: './asha-patient.component.html',
  styleUrls: ['./asha-patient.component.css']
})
export class AshaPatientComponent implements OnInit {
  searchText: String;
  
  constructor() { }

  ngOnInit(): void {
    this.searchText = "";
  }

}
