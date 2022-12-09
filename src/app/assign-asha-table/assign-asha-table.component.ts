import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AshaModalComponent } from '../asha-modal/asha-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assign-asha-table',
  templateUrl: './assign-asha-table.component.html',
  styleUrls: ['./assign-asha-table.component.css']
})
export class AssignAshaTableComponent implements OnInit {

  patients: Patient[];
  searchText: String;
  children: Patient[];  
  samId: String;
  dischargeId: String;
  modalRef: MdbModalRef<AshaModalComponent> | null = null;

  pipe: DatePipe;
  dataSource = new MatTableDataSource<Patient>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['id', 'name', 'address', 'pincode', 'contact', 'date', 'nrc', 'asha'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  constructor(private patientService: PatientService, private modalService: MdbModalService) {
    this.searchText = '';
  }

  ngOnInit() {
    this.children = [];
    this.patientService.findAllPhc(localStorage.getItem('phc') || '').subscribe(data => {
      this.patients = data;
      this.hello();

    // this.patients = [
    //   {name: 'aaru', address: 'hsr khakdjfn kleajfkajn kihefkajn kiehfjkesnf kiuhfekdnvm kihekasjb kuhefkhsf', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", status: "SAM",
    //   dischargeDate: new Date(), admissionDate: new Date(), dischargeSd: -1, dischargeId: "1", samNum: "4987", ashaId: 1, ashaName: ""},
    //   {name: 'gayu', address: 'hsr khakdjfn kleajfkajn kihefkajn kiehfjkesnf kiuhfekdnvm kihekasjb kuhefkhsf gvg', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", status: "MAM",
    //   dischargeDate: new Date("2019-01-16"), admissionDate: new Date("2019-01-16"), dischargeSd: -1, dischargeId: "1", samNum: "3056", ashaId: 1, ashaName: ""},      
    // ]

    this.hello();
    // this.children = [
    //   {name: 'aaru', address: 'hsr khakdjfn kleajfkajn kihefkajn kiehfjkesnf kiuhfekdnvm kihekasjb kuhefkhsf', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", status: "SAM",
    //   dischargeDate: new Date(), admissionDate: new Date(), dischargeSd: -1, dischargeId: "1", samNum: "4987", ashaId: 1, ashaName: ""},
    //   {name: 'gayu', address: 'hsr khakdjfn kleajfkajn kihefkajn kiehfjkesnf kiuhfekdnvm kihekasjb kuhefkhsf gvg', mobileNumber: '8765456', pincode: '786763', caseId: 1, samId: "1", 
    //   rchId: "4", patientId: 1, gender: 'F', aadharId: '24', "abhaId": '1', ageInMonths: 2, nrcFrom: "", status: "MAM",
    //   dischargeDate: new Date("2019-01-16"), admissionDate: new Date("2019-01-16"), dischargeSd: -1, dischargeId: "1", samNum: "3056", ashaId: 1, ashaName: ""},      
    // ]

    this.dataSource = new MatTableDataSource(this.patients);

    this.pipe = new DatePipe('en');
      this.dataSource.filterPredicate = (data: any, filter: any) =>{
        var b = true;
        if (this.fromDate && this.toDate) {
          b =  new Date(data.dischargeDate) >= this.fromDate && new Date(data.dischargeDate) <= this.toDate;  
        }    
          return (data.name.includes(filter) || 
          data.address.includes(filter) || data.pincode.includes(filter) || 
          data.mobileNumber.includes(filter) || data.nrcFrom.includes(filter)) && b;
        
    }
    });
  }

  
  hello() {
    for(var i = 0; i < this.patients.length; i++) {
        this.samId = this.patients[i].samId;
        this.patientService.findBySamId(this.samId.toString()).subscribe(data1 => {
          this.children.push(data1[0]);
        });
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
    console.log("FILTER VAL", filterValue)
    this.dataSource.filter = filterValue;
    console.log("daar", this.dataSource)
  }

  openModal(caseId: number) {
    this.modalRef = this.modalService.open(AshaModalComponent, {
      // modalClass: 'modal-lg',
      data: {caseId: caseId}
    })
  }
}