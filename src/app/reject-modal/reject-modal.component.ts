import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.css']
})
export class RejectModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<RejectModalComponent>) { }

  ngOnInit(): void {
  }

}