import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';
import { AshaModalComponent } from '../asha-modal/asha-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-assign-asha-table',
  templateUrl: './assign-asha-table.component.html',
  styleUrls: ['./assign-asha-table.component.css']
})
export class AssignAshaTableComponent implements OnInit {

  patients: Patient[];
  children: Patient[];  
  samId: String;
  dischargeId: String;
  modalRef: MdbModalRef<AshaModalComponent> | null = null;

  constructor(private patientService: PatientService, private modalService: MdbModalService) {
  }

  ngOnInit() {
  this.children=[];
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
// console.log("wassup2",this.patients);
this.hello();
  });


//   for(var i=0; i<this.patients.length; i++) {
//           this.samId = this.patients[i].samId;
//           console.log("hello",this.samId);
//   //         console.;
//           this.patientService.findBySamId(this.samId.toString())
//           .subscribe(data1 => {
//               console.log("hiii",data1);
//             this.children.push(data1);
//           });
//         }

}

hello(){
// console.log("wassup",this.patients);
  for(var i=0; i<this.patients.length; i++) {
          this.samId = this.patients[i].samId;
          console.log("hello",i,this.samId);
//   //         console.;
          this.patientService.findBySamId(this.samId.toString())
          .subscribe(data1 => {

//               this.patients[i].address = "hello";
//               console.log("##!!#", this.patients[i]);
            this.children.push(data1[0]);
          });
        }
}


  openModal(caseId: number) {
    this.modalRef = this.modalService.open(AshaModalComponent, {
      modalClass: 'modal-md',
      data: {caseId: caseId}
    })
  }
}