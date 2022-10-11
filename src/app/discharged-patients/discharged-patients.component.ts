import { Component, OnInit } from '@angular/core';
import { RejectModalComponent } from '../reject-modal/reject-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-discharged-patients',
  templateUrl: './discharged-patients.component.html',
  styleUrls: ['./discharged-patients.component.css']
})
export class DischargedPatientsComponent implements OnInit {

  modalRef: MdbModalRef<RejectModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open(RejectModalComponent, {
      modalClass: 'modal-md'
    })
  }

}


