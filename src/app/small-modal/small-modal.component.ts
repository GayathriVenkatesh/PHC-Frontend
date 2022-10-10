import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.css']
})
export class SmallModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<SmallModalComponent>) {}

  ngOnInit(): void {
  }

}