import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<CancelModalComponent>) { }
  ngOnInit(): void {
  }

}
