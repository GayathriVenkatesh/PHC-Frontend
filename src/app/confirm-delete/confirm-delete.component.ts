import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';
import { PhcService } from '../service/phc.service';
import { NrcService } from '../service/nrc.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ConfirmDeleteComponent>, private ashaWorkerService: AshaWorkerService, private nrcService: NrcService, private phcService: PhcService) { }

  entity: String;
  id: number;
  ngOnInit(): void {
  }

    delete(): void{
    if(this.entity=='ASHA'){
    console.log(this.id);
    this.ashaWorkerService.delete(this.id).subscribe();}
    else if(this.entity=='NRC'){
        console.log(this.id);
        this.nrcService.delete(this.id).subscribe();
        }
    else{
    console.log(this.id);
    this.phcService.delete(this.id).subscribe();
    }
    location.reload();
    }


  reject(): void {
    this.modalRef.close();
  }
}