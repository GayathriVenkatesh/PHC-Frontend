import { Component, OnInit } from '@angular/core';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';
import { WorkerDetailModalComponent } from '../worker-detail-modal/worker-detail-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-followup-table',
  templateUrl: './followup-table.component.html',
  styleUrls: ['./followup-table.component.css']
})
export class FollowupTableComponent implements OnInit {

  followups: Followup[];
  modalRef: MdbModalRef<WorkerDetailModalComponent> | null = null;

  constructor(private followupService: FollowupService, private modalService: MdbModalService) {
  }

  ngOnInit() {
    this.followupService.findAll().subscribe(data => {
      this.followups = data;
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(WorkerDetailModalComponent, {
      modalClass: 'modal-md'
    })
  }

}

