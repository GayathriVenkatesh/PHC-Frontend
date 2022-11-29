import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-phc-modal',
  templateUrl: './add-phc-modal.component.html',
  styleUrls: ['./add-phc-modal.component.css']
})
export class AddPhcModalComponent implements OnInit {

  name: String;
  parentName: String;
  address: String;
  pincode: String;
  contact: String;
  title: String;
  entity: String;
  parent: String;

  constructor(public modalRef: MdbModalRef<AddPhcModalComponent>) { }

  ngOnInit(): void {
  }

}
