import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FollowupDate } from '../model/followup-dates';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.css']
})
export class SmallModalComponent implements OnInit {

followupId: number;
    followup: Followup;
    followupDate: Date;

  constructor(private followupService: FollowupService, public modalRef: MdbModalRef<SmallModalComponent>) {}

  ngOnInit(): void {
  console.log(this.followupId);

    this.followupService.findByFollowupId(this.followupId).subscribe(data => {
      this.followup = data;
      console.log("FOLLOWUP", this.followup)
    })
  }

}