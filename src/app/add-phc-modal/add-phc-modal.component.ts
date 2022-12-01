import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AshaWorker } from '../model/asha-worker';
import { AshaWorkerService } from '../service/asha-worker.service';


@Component({
  selector: 'app-add-phc-modal',
  templateUrl: './add-phc-modal.component.html',
  styleUrls: ['./add-phc-modal.component.css']
})
export class AddPhcModalComponent implements OnInit {

  ashaId: number | null;
  name: String;
  username: String;
  password: String;
  parentName: String;
  address: String;
  pincode: String;
  contact: String;
  title: String;
  entity: String;
  parent: String;
  asha: AshaWorker;
  ward: String;


  constructor(public modalRef: MdbModalRef<AddPhcModalComponent>,private ashaWorkerService: AshaWorkerService) { }

  ngOnInit(): void {

  }

  onSubmit() {
  this.asha = {name: this.name, ward: this.ward, area: this.address, pincode: this.pincode, phoneNumber: this.contact, phcName: this.parentName, ashaId: this.ashaId };
  console.log(this.name, this.address, this.pincode, this.contact);
  console.log("hello", this.asha);

    this.ashaWorkerService.ashaSave(this.asha).subscribe();
    location.reload();
  }


}
