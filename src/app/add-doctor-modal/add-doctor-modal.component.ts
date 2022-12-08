import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

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

  constructor(public modalRef: MdbModalRef<AddDoctorModalComponent>, private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  // openConfirm(nrcId: number) {
  //   this.modalRef = this.modalService.open(ConfirmDeleteComponent, {
  //     modalClass: 'modal-sm',
  //     data: {
  //           entity: 'NRC',
  //           id: nrcId
  //       }
  //   })
  // }

}
