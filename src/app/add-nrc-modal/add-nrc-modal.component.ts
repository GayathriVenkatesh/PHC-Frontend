import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-nrc-modal',
  templateUrl: './add-nrc-modal.component.html',
  styleUrls: ['./add-nrc-modal.component.css']
})
export class AddNrcModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<AddNrcModalComponent>) { }

  ngOnInit(): void {
  }

}