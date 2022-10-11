import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-worker-detail-modal',
  templateUrl: './worker-detail-modal.component.html',
  styleUrls: ['./worker-detail-modal.component.css']
})
export class WorkerDetailModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<WorkerDetailModalComponent>) { }

  ngOnInit(): void {
  }

}
