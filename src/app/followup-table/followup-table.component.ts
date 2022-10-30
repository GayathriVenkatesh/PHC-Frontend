import { Component, OnInit } from '@angular/core';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';
import { WorkerDetailModalComponent } from '../worker-detail-modal/worker-detail-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FollowupSchedule } from '../model/followup-schedule';

@Component({
  selector: 'app-followup-table',
  templateUrl: './followup-table.component.html',
  styleUrls: ['./followup-table.component.css']
})
export class FollowupTableComponent implements OnInit {

  followup: Followup[];
    followups: FollowupSchedule[];
  modalRef: MdbModalRef<WorkerDetailModalComponent> | null = null;

  constructor(private followupService: FollowupService, private modalService: MdbModalService) {
  }

  ngOnInit() {
//     this.followupService.findAll().subscribe(data => {
//       this.followups = data;
//     });
    this.followupService.findFollowupSchedule().subscribe(data => {
        this.followups = data;
        console.log("followups", this.followups);
        });
  }

  openModal() {
    this.modalRef = this.modalService.open(WorkerDetailModalComponent, {
      modalClass: 'modal-md'
    })
  }

}

