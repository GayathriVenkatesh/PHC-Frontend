import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-remarks-modal',
  templateUrl: './remarks-modal.component.html',
  styleUrls: ['./remarks-modal.component.css']
})
export class RemarksModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<RemarksModalComponent>) { }

  ngOnInit(): void {
  }

}
