import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SmallModalComponent } from '../small-modal/small-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FollowupSchedule } from '../model/followup-schedule';
import { FollowupService } from '../service/followup.service';
import { FollowupDate } from '../model/followup-dates';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-followup-table-nrc',
  templateUrl: './patient-followup-table-nrc.component.html',
  styleUrls: ['./patient-followup-table-nrc.component.css']
})

export class PatientFollowupTableNrcComponent implements OnInit {

  modalRef: MdbModalRef<ModalComponent> | null = null;
  searchText: String;
//   followups: FollowupSchedule[];
  followups: FollowupDate[];
  caseId: String;
  community: FollowupDate[] = [];
  nrc: FollowupDate[] = [];
  general: FollowupDate[] = [];
  name: String;
  samNum: Number;

  constructor(private router: Router, private followupService: FollowupService, private modalService: MdbModalService) {}

  openModal(followupId: number, followupDate: Date) {
    const modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg',
      data: { followupId: followupId,
               followupDate: followupDate},
    });
    console.log(followupId);
//     modalRef.componentInstance.followupId=followupId;
  }

  openSmallModal() {
    this.modalRef = this.modalService.open(SmallModalComponent, {
      modalClass: 'modal-sm'
    })
  }

  ngOnInit(): void {
    console.log("KJBJBJB", this.router.url);
    this.caseId = this.router.url.split("/")[2];
    this.followupService.findByCaseId(this.caseId).subscribe(data => {
      this.followups = data;
      for(var i=0;i<this.followups.length;i++){
      console.log(this.followups[i].followupDate);
        if(this.followups[i].type=="COMMUNITY"){
        console.log(this.followups[i].followupId)
          this.community.push(this.followups[i]);
          }
          else if(this.followups[i].type=="NRC"){
          console.log(this.followups[i].followupId)
          this.nrc.push(this.followups[i]);
          }
          else {
                  console.log(this.followups[i].followupId)
                  this.general.push(this.followups[i]);
          }
      }
          console.log("DATE", this.followups[0].followupDate);
      console.log("followups communtiy", this.community);
      console.log("followups nrc", this.nrc);
      });
    this.searchText = "";
  }

}
