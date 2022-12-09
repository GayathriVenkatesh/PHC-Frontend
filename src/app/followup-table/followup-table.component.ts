import { Component, OnInit } from '@angular/core';
import { Followup } from '../model/followup';
import { FollowupService } from '../service/followup.service';
import { WorkerDetailModalComponent } from '../worker-detail-modal/worker-detail-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FollowupSchedule } from '../model/followup-schedule';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-followup-table',
  templateUrl: './followup-table.component.html',
  styleUrls: ['./followup-table.component.css']
})
export class FollowupTableComponent implements OnInit {

  followup: Followup[];
  followups: FollowupSchedule[];
  searchText: String;
  pipe: DatePipe;
  modalRef: MdbModalRef<WorkerDetailModalComponent> | null = null;
  today: Date;
  last: Date;

  dataSource = new MatTableDataSource<FollowupSchedule>;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  displayedColumns: string[] = ['id', 'name', 'asha', 'followups', 'lastCommunity', 'nextCommunity', 'nextNrc'];
  get fromDate() { return this.filterForm.get('fromDate')?.value; }
  get toDate() { return this.filterForm.get('toDate')?.value; }

  set fromDate(d: Date) { 
    if (this.filterForm && this.filterForm.get('fromDate') && this.filterForm.get('fromDate')) {
      this.filterForm = new FormGroup({
        fromDate: new FormControl(),
        toDate: new FormControl(),
    });
    }
  }
  set toDate(d: Date) { 
    this.filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  }

  constructor(private followupService: FollowupService, private modalService: MdbModalService) {
  this.today = new Date();
  this.last = new Date('Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)');
  console.log("dates: ", this.today, this.last);
  }

  ngOnInit() {
    console.log("USERNAME", localStorage.getItem('username'));
    this.followupService.findFollowupSchedulePhc(localStorage.getItem('phc') || '').subscribe(data => {
      this.followups = data;
      console.log("followups", this.followups);

      for(var i=0;i<this.followups.length;i++){
      this.followups[i].lastCommunity = new Date(this.followups[i].lastCommunity);
      }


    // this.followups = [
    //   {nextCommunity: new Date(), nextNrc: new Date(), caseId: 1, followupId: 1, scheduleId: 1, samNum: 1, 
    //     childName: "gayu", followupDate: new Date(), ashaName: "hi", ashaNumber: "1", followupsDone: 2, 
    //     ashaId: 1, type: "community", rchId: 1, mobileNumber: "7675765675", place:"", lastCommunity: new Date(), lastNrc: new Date()},
    //   {nextCommunity: new Date("01-11-2022"), nextNrc: new Date(), caseId: 1, followupId: 1, scheduleId: 1, samNum: 1, 
    //     childName: "aaru", followupDate: new Date(), ashaName: "hi", ashaNumber: "1", followupsDone: 2, 
    //     ashaId: 1, type: "community", rchId: 1, mobileNumber: "7675765675", place: "", lastCommunity: new Date(), lastNrc: new Date()},
    // ]

    this.searchText = "";
    this.dataSource = new MatTableDataSource(this.followups);

    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data: any, filter: any) =>{
      var b = true;
      if (this.fromDate && this.toDate) {
        b =  new Date(data.nextCommunity) >= this.fromDate && new Date(data.nextCommunity) <= this.toDate;
      }
        return (data.childName.includes(filter) || 
        data.ashaName.includes(filter) || 
        data.followupsDone == filter) && b;
  }
    console.log(this.dataSource);
    });
  }

  resetDate() {
    this.dataSource.filter = '';
    this.fromDate = new Date('');
    this.toDate = new Date("");
  }

  applyFilterDate() {
    this.dataSource.filter = '' + Math.random();
  }

  applyFilterText(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log("jhbhjbm", filterValue);
  }

  openModal(ashaId: string) {
  console.log("HELLO", ashaId);
    this.modalRef = this.modalService.open(WorkerDetailModalComponent, {
      modalClass: 'modal-md',
      data: {ashaId: ashaId}
    })
  }

}

