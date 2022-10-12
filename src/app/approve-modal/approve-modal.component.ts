import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.component.html',
  styleUrls: ['./approve-modal.component.css']
})
export class ApproveModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ApproveModalComponent>) { }

  ngOnInit(): void {
  }

}
