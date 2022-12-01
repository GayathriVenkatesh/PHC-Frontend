import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DischargedPatient } from '../model/discharged-patient';
import { PatientService } from '../service/patient.service';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';


@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ConfirmDeleteComponent>, private ashaWorkerService: AshaWorkerService) { }

  ashaId: number;
  ngOnInit(): void {
  }

    delete(): void{
    this.ashaWorkerService.delete(this.ashaId).subscribe();
    location.reload();
    }


  reject(): void {
    this.modalRef.close();
  }
}