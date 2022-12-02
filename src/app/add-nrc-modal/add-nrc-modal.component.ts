import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NRC } from '../model/nrc';
import { NrcService } from '../service/nrc.service';

@Component({
  selector: 'app-add-nrc-modal',
  templateUrl: './add-nrc-modal.component.html',
  styleUrls: ['./add-nrc-modal.component.css']
})
export class AddNrcModalComponent implements OnInit {

  nrcId: number | null;
  name: String;
  address: String;
  pincode: String;
  contact: String;
  title: String;
  nrc: NRC;

  constructor(public modalRef: MdbModalRef<AddNrcModalComponent>, private nrcService: NrcService) { }

  ngOnInit(): void {
  }

    onSubmit() {
    //this.asha = {name: this.name, ward: this.ward, area: this.address, pincode: this.pincode, phoneNumber: this.contact, phcName: this.parentName, ashaId: this.ashaId };
    this.nrc = {nrcId: this.nrcId, name: this.name,address: this.address, pincode: this.pincode, contactNumber: this.contact };
    //console.log(this.name, this.address, this.pincode, this.contact);
    //console.log("hello", this.asha);
    console.log("hello", this.nrc);

      //if(this.entity=='ASHA'){
      //this.ashaWorkerService.ashaSave(this.asha).subscribe();}
      //else{
      this.nrcService.save(this.nrc).subscribe();
      //}
      //location.reload();
    }

}
