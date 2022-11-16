import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';
import { FollowupService } from '../service/followup.service';
import { Followup } from '../model/followup';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupSched } from '../model/followup-sched';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asha-add-followup',
  templateUrl: './asha-add-followup.component.html',
  styleUrls: ['./asha-add-followup.component.css']
})
export class AshaAddFollowupComponent implements OnInit {

  modalRef: MdbModalRef<CancelModalComponent> | null = null;
followup: Followup;
    caseId: string;
    followupSchedule: FollowupSched;
    lastFollowup: Followup;
    scheduleId: string;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService, private followupService: FollowupService ) {
  this.followup = new Followup();
    this.followup.followupDate = new Date();
    }

    onSubmit(){
    console.log("NEW Followup ", this.followup);

    this.followupService.save(this.followup).subscribe(result =>
    this.update());
    }

    update(){
    this.followupService.update(parseInt(this.scheduleId)).subscribe(result =>
        this.gotoFollowups());
    }

    gotoFollowups(){

            this.router.navigate(['/asha-followups']);
            }


  ngOnInit(): void {
      this.scheduleId = this.router.url.split("/")[2];

  }

  openCancelModal() {
    this.modalRef = this.modalService.open(CancelModalComponent, {
      modalClass: 'modal-md'
    })
  }
}
