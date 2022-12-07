import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AshaWorkerService } from '../service/asha-worker.service';
import { Router } from '@angular/router';
import { AshaWorker } from '../model/asha-worker';

@Component({
  selector: 'app-worker-detail-modal',
  templateUrl: './worker-detail-modal.component.html',
  styleUrls: ['./worker-detail-modal.component.css']
})
export class WorkerDetailModalComponent implements OnInit {
  ashaId: String;
  asha: AshaWorker;

  constructor(public modalRef: MdbModalRef<WorkerDetailModalComponent>, private router: Router, private ashaWorkerService: AshaWorkerService) { }

  ngOnInit(): void {
    //this.ashaId = this.router.url.split("/")[2];
    console.log("ASHA", this.ashaId);
      this.ashaWorkerService.findById(this.ashaId).subscribe(data => {
        this.asha = data;
      console.log("assigned asha ",data);
      });
  }
}
