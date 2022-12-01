import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-doctor-modal',
  templateUrl: './add-doctor-modal.component.html',
  styleUrls: ['./add-doctor-modal.component.css']
})
export class AddDoctorModalComponent implements OnInit {

  username: String;
  password: String;
  parent: String;
  parentName: String;
  title: String;

  constructor(public modalRef: MdbModalRef<AddDoctorModalComponent>) { }

  ngOnInit(): void {
  }

}
