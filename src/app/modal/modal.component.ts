import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FollowupDate } from '../model/followup-dates';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{

//     followupId: number | null = null;
    followupId: number;
    followup: Followup;
    followupDate: Date;
  constructor(private followupService: FollowupService, public modalRef: MdbModalRef<ModalComponent>) {

  }


  ngOnInit(): void {
  console.log(this.followupId);

  this.followupService.findByFollowupId(this.followupId).subscribe(data => {
    this.followup = data;
    console.log("FOLLOWUP", this.followup)
  })
  }
}